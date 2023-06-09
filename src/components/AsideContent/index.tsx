import { useState } from 'react';
import S from './AsideContent.module.css';
import useCurrentPageContext from '@/hooks/useAppContext';

export default function AsideContent() {
	const { currentPage, components, setCurrentPage } = useCurrentPageContext();

	const handleClickCategory = (category: string) => {
		setCurrentPage(category);
	};

	return (
		<aside className={S.asideContain}>
			<ul>
				<li
					className={`${'início' === currentPage ? S.active : ''}`}
					onClick={() => {
						handleClickCategory('início');
					}}
				>
					{'início'.toUpperCase()}
				</li>
				{components.map(({ category, id }) => {
					return (
						<li
							key={id}
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
