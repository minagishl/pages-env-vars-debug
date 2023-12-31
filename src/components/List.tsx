import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const List = () => {
	const envTable = Object.keys(process.env)
		.map((key) => {
			return `| ${key} | ${process.env[key]} |`;
		})
		.join('\n');

	const markdownTable =
		'| VAR                  | Value                |\n' +
		'| -------------------- | -------------------- |\n' +
		envTable;

	// debug
	// console.log(markdownTable);
	return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownTable}</ReactMarkdown>;
};
