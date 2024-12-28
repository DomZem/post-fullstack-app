import { Card, CardHeader, CardTitle } from '../ui/card';

type Post = {
	id: number;
	title: string;
	content?: string;
};

const getPosts = async () => {
	try {
		const response = await fetch(`${process.env.BACKEND_API_URL}/posts`);

		if (response.ok) {
			const posts = (await response.json()) as Post[];
			return posts;
		}
		return [];
	} catch (e) {
		console.error(e);
		return [];
	}
};

export const PostsList = async () => {
	const posts = await getPosts();

	if (posts.length === 0) {
		return <div>No posts found</div>;
	}

	return (
		<ul className='space-y-4'>
			{posts.map((post) => (
				<Card key={post.id}>
					<CardHeader className='flex flex-row justify-between items-center'>
						<div className='inline-flex items-center gap-3'>
							<p className='text-sm'>#{post.id}</p>
							<CardTitle>{post.title}</CardTitle>
						</div>
					</CardHeader>
				</Card>
			))}
		</ul>
	);
};
