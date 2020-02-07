import React from 'react';

import './table-element.scss';

export const Table = ({ children }) => <table className="table">{children}</table>;

export const Thead = ({ children }) => <thead>{children}</thead>;

export const Tbody = ({ children }) => <tbody>{children}</tbody>;

export const Tr = ({ children }) => <tr className="table__row">{children}</tr>;

export const Th = ({ children }) => (
	<th className="table__head">
		<span className="table__text">
			<span className="table__text-inner">{children}</span>
		</span>
	</th>
);

export const Td = ({ children }) => (
	<td className="table__col">
		<span className="table__text">
			<span className="table__text-inner">{children}</span>
		</span>
	</td>
);
