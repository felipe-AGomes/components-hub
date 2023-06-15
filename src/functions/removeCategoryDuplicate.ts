import { MiniatureProps } from '@/@types';

export const removeCategoryDuplicate = (miniatures: MiniatureProps[]) => {
	const categories = miniatures.map((miniature) => miniature.category);
	return [...new Set(categories)];
};
