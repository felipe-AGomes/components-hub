import { MiniatureProps } from '@/@types';

export const filterCategory = (
	categories: MiniatureProps[],
	filter: string,
) => {
	return categories.filter(({ category }) => category === filter);
};
