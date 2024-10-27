import {ContentLayout} from '@/components/layout/content-layout';

import {Breadcrumbs} from '@/components/ui/breadcrumbs';
import CreateCustomerSection from '@/modules/sales/_sections/customer/customer-create';

const breadcrubItems = [
	{title: 'Dashboard', link: 'sales/dashboard'},
	{title: 'Systems', link: 'sales/overview'},
	{title: 'Overview', link: 'sales/overview'},
	{title: 'Customer', link: 'sales/customer'},
	{title: 'Create', link: '#'},
];

export default function CustomerCreatePage() {
	return (
		<ContentLayout title="PC BEE Management Systems">
			<Breadcrumbs items={breadcrubItems} />
			<CreateCustomerSection />
		</ContentLayout>
	);
}