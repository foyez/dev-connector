import React from 'react';

import { Table, Thead, Tbody, Tr, Th, Td } from './table-element/table-element.component';

const TableExample = () => {
	return (
		<Table>
			<Thead>
				<Tr>
					<Th>Heading 1</Th>
					<Th>Heading 2</Th>
				</Tr>
			</Thead>

			<Tbody>
				<Tr>
					<Td>From</Td>
					<Td>Financial Assistant</Td>
				</Tr>
				<Tr>
					<Td>To</Td>
					<Td>Full-stack developer</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default TableExample;
