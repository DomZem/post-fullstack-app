import { Header } from '@/components/layout/header';
import { PostsList } from '@/components/post/posts-list';

export default function Home() {
	return (
		<div>
			<div className='max-w-5xl mx-auto px-4'>
				<Header />
				<main>
					<PostsList />
				</main>
			</div>
		</div>
	);
}
