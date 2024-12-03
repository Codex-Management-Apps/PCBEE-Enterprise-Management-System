import {OrderList} from '../../order/order-list';
import useOrderStore from '../../_components/hooks/use-orders';
import {useEffect} from 'react';
import {Heading} from '@/components/ui/heading';
import {Separator} from '@/components/ui/separator';

export default function OrderSection() {
	const {resetOrder} = useOrderStore();
	useEffect(() => {
		resetOrder();
	}, []);
	return (
		<div className="flex flex-col sm:gap-4 p-5">
			<Heading
				title={'Orders'}
				description={'Summary of all current and past orders'}
			/>
			<Separator />
			<OrderList />
		</div>
	);
}
