import {ContentLayout} from '@/components/layout/content-layout';
import {Breadcrumbs} from '@/components/ui/breadcrumbs';
import JoborderView from '@/modules/sales/_sections/service/joborder-view';

const breadcrubItems = [
	{title: 'Dashboard', link: '/tech/dashboard'},
	{title: 'Systems', link: '/tech/overview'},
	{title: 'Overview', link: '/tech/overview'},
	{title: 'Joborders', link: '/tech/services/joborders'},
	{title: 'View', link: '/tech/services/joborders'},
];

export default function JoborderViewPage() {
	return (
		<ContentLayout title="PC BEE Management Systems">
			<Breadcrumbs items={breadcrubItems} />
			<JoborderView />
		</ContentLayout>
	);
}