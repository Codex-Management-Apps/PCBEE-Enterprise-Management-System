import {useEffect, useState} from 'react';
import {JoborderTable} from './joborder-table';
import {JobOrderWithDetails} from '@/lib/sales-zod-schema';
import {PaginationResponse, request} from '@/api/axios';
import {columns} from './columns';

export type paramsProps = {
	searchParams: URLSearchParams;
};

export function JoborderList({searchParams}: paramsProps) {
	const [joborder, setJoborder] = useState<JobOrderWithDetails[]>([]);
	const [pageCount, setPageCount] = useState<number>(0);

	const page = Number(searchParams.get('page')) || 1;
	const pageLimit = Number(searchParams.get('limit')) || 10;
	const status = searchParams.get('status') || null;
	const sort = searchParams.get('sort') || null;
	const offset = (page - 1) * pageLimit;

	useEffect(() => {
		const fetchEmployees = async () => {
			const res = await request<PaginationResponse<JobOrderWithDetails>>(
				'GET',
				`/api/v1/sms/joborder?limit=${pageLimit}&offset=${offset}` +
					(status ? `&joborder_status=${status}` : '') +
					(sort ? `&sort=${sort}` : ''),
			);
			setJoborder(res.data);
			setPageCount(Math.ceil(res.total_data / pageLimit));
		};

		fetchEmployees();
	}, [offset, pageLimit, sort, status]);
	console.log(joborder);
	return (
		<JoborderTable
			columns={columns}
			data={joborder}
			searchKey={'uuid'}
			pageCount={pageCount}
		/>
	);
}
