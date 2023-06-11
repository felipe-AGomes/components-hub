import { MiniatureProps } from '@/@types';

export const removeDuplicate = (miniatures: MiniatureProps[]) => {
	const categories = miniatures.map((miniature) => miniature.category);
	return [...new Set(categories)];
};
