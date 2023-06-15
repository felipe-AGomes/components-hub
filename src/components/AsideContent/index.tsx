import { removeCategoryDuplicate } from '@/functions/removeCategoryDuplicate';
import S from './AsideContent.module.css';
import useAppContext from '@/hooks/useAppContext';

export default function AsideContent() {
	const {
		currentPage,
		miniatures,
		windowWidth,
		isMenuOpen,
		setCurrentPage,
		setIsMenuOpen,
	} = useAppContext();

	const handleClickCategory = (category: string) => {
		setCurrentPage(category);
	};

	const uniqueCategories = removeCategoryDuplicate(miniatures);
	const lessOrEqualThen700 = windowWidth <= 700;

	return (
		<aside
			className={`${lessOrEqualThen700 ? S.asideContainMobile : S.asideContain} ${
				lessOrEqualThen700 && isMenuOpen ? S.active : ''
			}`}
		>
			<ul>
				<li
					className={`${'início' === currentPage ? S.active : ''}`}
					onClick={() => {
						setIsMenuOpen(false);
						handleClickCategory('início');
					}}
				>
					{'início'.toUpperCase()}
				</li>
				{uniqueCategories.map((category) => {
					return (
						<li
							key={category}
							className={`${category === currentPage ? S.active : ''}`}
							onClick={() => {
								setIsMenuOpen(false);
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
