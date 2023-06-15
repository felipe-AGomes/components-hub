import { MiniatureProps } from '@/@types';

export const filterByNameOrCategory = (
	localeToSearch: MiniatureProps[],
	searchValue: string,
) => {
	return [
		...new Set([
			...localeToSearch.filter((miniature) =>
				miniature.name.toLowerCase().includes(searchValue.toLowerCase()),
			),
			...localeToSearch.filter((miniature) =>
				miniature.category.toLowerCase().includes(searchValue.toLowerCase()),
			),
		]),
	];
};
