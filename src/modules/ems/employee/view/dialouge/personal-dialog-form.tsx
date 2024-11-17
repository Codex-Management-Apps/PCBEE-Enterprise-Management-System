import {Button} from '@/components/ui/button';
import {EmployeeRolesWithDetails} from '@/modules/ems/_components/validation/employeeRoles';
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog';
import {useCallback, useState} from 'react';
import {PersonalForm} from '../settings/form/personal-form';

interface Props {
	selectedEmployee: EmployeeRolesWithDetails;
}

export function PersonalDialogeForm({selectedEmployee}: Props) {
	const [formModal, setFormModal] = useState<boolean>(false);
	const handleFormSubmit = useCallback(() => {
		setFormModal(false);
	}, []);
	return (
		<Dialog open={formModal} onOpenChange={setFormModal}>
			<DialogTrigger asChild>
				<Button variant="outline">Add Personal Information</Button>
			</DialogTrigger>
			<DialogContent className="w-[2000px]">
				<PersonalForm
					selectedEmployee={selectedEmployee}
					onSubmit={handleFormSubmit}
				/>
			</DialogContent>
		</Dialog>
	);
}