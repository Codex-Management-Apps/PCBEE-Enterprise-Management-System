import {CreateOrderForm} from '../../order/form/creat-order-form';

export default function CreateOrderSection() {
	return (
		<div className="flex flex-col sm:gap-4 p-4">
			<CreateOrderForm />
		</div>
	);
}