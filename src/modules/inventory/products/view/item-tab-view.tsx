import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ProductInformationTab} from './information/information-tab';

export function ViewItemTabDetails() {
	return (
		<Tabs defaultValue="Informations" className="p-3">
			<div className="flex items-center">
				<TabsList>
					<TabsTrigger value="Informations">Informations</TabsTrigger>
					<TabsTrigger value="Analytics">Analytics</TabsTrigger>
					<TabsTrigger value="Settings">Settings</TabsTrigger>
				</TabsList>
				{/* Possibly add a marquee here for announcements or something */}
			</div>
			<TabsContent value="Informations">
				<ProductInformationTab />
			</TabsContent>
			<TabsContent value="Analytics"></TabsContent>
			<TabsContent value="Settings"></TabsContent>
		</Tabs>
	);
}
