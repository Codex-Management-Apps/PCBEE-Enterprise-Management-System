import {MenuIcon, PanelsTopLeft} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {
	Sheet,
	SheetHeader,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from '@/components/ui/sheet';
import {Link} from 'react-router-dom';
import {Menu} from './menu';
import {Group} from '@/components/appLayout/data/menu-list';
interface SheetMenuProps {
	menuList: Group[]; // Menu list is passed as a prop
}
export function SheetMenu({menuList}: SheetMenuProps) {
	return (
		<Sheet>
			<SheetTrigger className="lg:hidden" asChild>
				<Button className="h-8" variant="outline" size="icon">
					<MenuIcon size={20} />
				</Button>
			</SheetTrigger>
			<SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
				<SheetHeader>
					<Button
						className="flex justify-center items-center pb-2 pt-1"
						variant="link"
						asChild
					>
						<Link to="/dashboard" className="flex items-center gap-2">
							<PanelsTopLeft className="w-6 h-6 mr-1" />
							<SheetTitle className="font-bold text-lg">Brand</SheetTitle>
						</Link>
					</Button>
				</SheetHeader>
				<Menu isOpen menuList={menuList} />
			</SheetContent>
		</Sheet>
	);
}