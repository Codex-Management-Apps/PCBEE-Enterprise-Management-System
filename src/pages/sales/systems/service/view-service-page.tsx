import {ContentLayout} from '@/components/layout/content-layout';

import {Breadcrumbs} from '@/components/ui/breadcrumbs';
import ServiceViewPage from '@/modules/sales/_sections/sales/service-view';

const breadcrubItems = [
	{title: 'Dashboard', link: 'sales/dashboard'},
	{title: 'Systems', link: 'sales/overview'},
	{title: 'Overview', link: 'sales/overview'},
	{title: 'Services', link: 'sales/services'},
	{title: 'View', link: '#'},
];
export default function ViewServicePage() {
	return (
		<ContentLayout title="PC BEE Management Systems">
			<Breadcrumbs items={breadcrubItems} />
			<ServiceViewPage />
		</ContentLayout>
	);
}