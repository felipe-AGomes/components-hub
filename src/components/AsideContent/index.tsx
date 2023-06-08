import { useState } from 'react';
import S from './AsideContent.module.css';
import useCurrentPageContext from '@/hooks/useCurrentPageContext';

export default function AsideContent() {
	const { currentPage, setCurrentPage } = useCurrentPageContext();

	const categories = ['card', 'formularios', 'loading', 'listas']; // Deve conter todas as categorias existentes

	const handleClickCategory = (category: string) => {
		setCurrentPage(category);
	};

	return (
		<aside className={S.asideContain}>
			<ul>
				{categories.map((category) => {
					return (
						<li
							key={category}
							className={`${category === currentPage ? S.active : ''}`}
							onClick={() => {
								handleClickCategory(category);
							}}
						>
							{category.toUpperCase()}
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
