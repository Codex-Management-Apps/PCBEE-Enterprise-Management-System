import {Separator} from '@/components/ui/separator';

import {Heading} from '@/components/ui/heading';
import EmployeeList from '../../employee/employeeList/employee-list';
import {EmployeeProfile} from '../../employee/employeeList/employee-profile';
import {useSearchParams} from 'react-router-dom';

export default function EmployeeSection() {
	const [searchParams] = useSearchParams();

	return (
		<div className="flex flex-col sm:gap-4">
			<div className="grid flex-1 items-start gap-4 p-4 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
				{/* Employee List */}
				<div className="grid items-start auto-rows-max gap-4 gap md:gap-6 lg:col-span-2">
					<div className="flex flex-col gap-4">
						<Heading
							title={`Employees`}
							description="Manage employees (Server side table functionalities.)"
						/>
						<Separator />
					</div>
					<EmployeeList searchParams={searchParams} />
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex lg:hidden">
						<Separator />
					</div>
					{/* Employee Profile */}
					<EmployeeProfile />
				</div>
			</div>
		</div>
	);
}