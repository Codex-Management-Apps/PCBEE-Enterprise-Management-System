import {z} from 'zod';
import {
	personalInformationSchema,
	employmentInformationSchema,
	salaryInformationSchema,
	financialInformationSchema,
	employeeBasicInformationSchema,
	OnPayrollSchema,
	PayollApprovalSchema,
} from './employee-zod-schema';

// Used on Create Employee Form
const employeeFormSchema = z.object({
	employeeBasicInformation: employeeBasicInformationSchema,
	personalInformation: personalInformationSchema,
	employmentInformation: employmentInformationSchema,
	salaryInformation: salaryInformationSchema,
	financialInformation: financialInformationSchema,
});

// Export the schema
export {employeeFormSchema};
export type EmployeeFormSchema = z.infer<typeof employeeFormSchema>;

export const onPayrollFormSchema = z.object({
	on_payroll: OnPayrollSchema,
	employee: employeeBasicInformationSchema,
	payroll_approval: PayollApprovalSchema,
});

export type OnPayrollJoin = z.infer<typeof onPayrollFormSchema>;

export const activityLogEmployeeSchema = z.object({
	activity_id: z.number().optional(),
	employee: employeeBasicInformationSchema,
	action: z.string().min(1),
	created_at: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type ActivityLogsJoin = z.infer<typeof activityLogEmployeeSchema>;

export const benefitAddMoreSchema = z.object({
	benefits: z.array(
		z.object({
			benefits_id: z.number().optional(),
			name: z.string().min(1, 'name is required'),
			start: z.string().min(1, 'start date is required'),
			end: z.string().min(1, 'end date is required'),
			frequency: z.string().min(1, 'frequency is required'),
			benefits_type: z.string().min(1, 'benefits type is required'),
			amount: z.string().min(1, 'amount is required'),
			description: z.string().optional(),
		}),
	),
});
export type BenefitAddMore = z.infer<typeof benefitAddMoreSchema>;

export const deductionAddmoreSchema = z.object({
	deductions: z.array(
		z.object({
			deduction_id: z.number().optional(),
			name: z.string().min(1, 'name is required'),
			start: z.string().min(1, 'start date is required'),
			end: z.string().min(1, 'end date is required'),
			frequency: z.string().min(1, 'frequency is required'),
			deduction_type: z.string().min(1, 'benefits type is required'),
			amount: z.string().min(1, 'amount is required'),
			description: z.string().optional(),
		}),
	),
});
export type DeductionAddMore = z.infer<typeof deductionAddmoreSchema>;
