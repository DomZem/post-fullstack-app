import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Plus, ScrollText } from 'lucide-react';
import { CreatePostForm } from '../post/create-post-form';
import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';

export const Header = () => {
	return (
		<header className='flex justify-between items-center py-4'>
			<div className='flex items-center space-x-4'>
				<ScrollText />
				<h1 className='text-2xl font-semibold tracking-tight'>Post</h1>
			</div>

			<div className='inline-flex items-center space-x-4'>
				<ModeToggle />

				<Sheet>
					<Button size='icon' asChild>
						<SheetTrigger>
							<Plus />
						</SheetTrigger>
					</Button>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Create New Post</SheetTitle>
						</SheetHeader>

						<CreatePostForm />
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};
