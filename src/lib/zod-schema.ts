import {z} from 'zod';

export const basicInformationSchema = z.object({
	employee_id: z.number().optional(),
	firstname: z.string().min(1, 'First name is required'), // Validate that it's a non-empty string
	middlename: z.string().optional(), // Optional middlename
	lastname: z.string().min(1, 'Last name is required'), // Validate that it's a non-empty string
	created_at: z.string().optional(),
	last_updated: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type BasicInformation = z.infer<typeof basicInformationSchema>;

export const personalInformationSchema = z.object({
	personal_information_id: z.number().optional(),
	birthday: z.string().min(1, 'Birthday is required'), // Could be converted to date if needed
	gender: z.enum(['Male', 'Female']), // Enum for gender
	phone: z.string().min(10, 'Phone number should be at least 10 digits'), // Min length check
	email: z.string().email('Invalid email address'), // Validates an email format
	address_line: z.string().min(1, 'Address line is required'), // Non-empty string
	postal_code: z.string().min(5, 'Postal code should be at least 5 characters'), // Validate length
	created_at: z.string().optional(),
	last_updated: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type PersonalInformation = z.infer<typeof personalInformationSchema>;

export const employmentInformationSchema = z.object({
	employment_information_id: z.number().optional(),
	department: z.string().min(1, 'Department is required'),
	designation: z.string().min(1, 'Designation is required'),
	employee_type: z.enum([
		'Regular',
		'Probationary',
		'Contractual',
		'Seasonal',
		'Temporary',
	]), // Enum for employment type
	employment_status: z.enum([
		'Active',
		'OnLeave',
		'Terminated',
		'Resigned',
		'Suspended',
		'Retired',
		'Inactive',
	]), // Enum for employment status
	created_at: z.string().optional(),
	last_updated: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type EmploymentInformation = z.infer<typeof employmentInformationSchema>;

export const salaryInformationSchema = z.object({
	salary_information_id: z.number().optional(),
	payroll_frequency: z.enum([
		'Daily',
		'Weekly',
		'Bi Weekly',
		'Semi Monthly',
		'Monthly',
	]), // Enum for payroll frequency
	base_salary: z.string().min(1), // Base salary must be a number
	created_at: z.string().optional(),
	last_updated: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type SalaryInformation = z.infer<typeof salaryInformationSchema>;

export const financialInformationSchema = z.object({
	financial_information_id: z.number().optional(),
	pag_ibig_id: z.string().min(1, 'Pag-IBIG ID is required'),
	sss_id: z.string().min(1, 'SSS ID is required'),
	philhealth_id: z.string().min(1, 'Philhealth ID is required'),
	tin: z.string().min(1, 'TIN is required'),
	bank_account_number: z.string().min(1, 'Bank account number is required'),
	created_at: z.string().optional(),
	last_updated: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type FinancialInformation = z.infer<typeof financialInformationSchema>;

export const DepartmentSchema = z.object({
	department_id: z.number().optional(),
	name: z.string().min(1, ''),
	status: z.string().min(1, ''),
	created_at: z.string().optional(),
	last_updated: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type Department = z.infer<typeof DepartmentSchema>;

export const DesignationSchema = z.object({
	designation_id: z.number(),
	title: z.string(),
	status: z.string(),
	created_at: z.string().optional(),
	last_updated: z.string().optional(),
	deleted_at: z.string().optional(),
});
export type Designation = z.infer<typeof DesignationSchema>;
