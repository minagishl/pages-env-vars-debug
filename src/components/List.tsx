'use strict';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const runtime = 'edge';

export const List = () => {
	const currentDate = new Date(); // Get current date

	const envTable = Object.keys(process.env)
		.map((key) => {
			return `| ${key} | ${process.env[key]} |`;
		})
		.join('\n');

	const markdownTable =
		'| VAR                                | Value                |\n' +
		'| ---------------------------------- | -------------------- |\n' +
		`| Date (Not an environment variable) | ${currentDate}       |\n` + // Add current date to the table
		envTable;

	// debug
	// console.log(markdownTable);
	return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownTable}</ReactMarkdown>;
};
