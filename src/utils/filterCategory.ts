import { ComponentsProps } from '@/@types';

export const filterCategory = (
	categories: ComponentsProps[],
	filter: string,
) => {
	return categories.filter(({ category }) => category === filter);
};
