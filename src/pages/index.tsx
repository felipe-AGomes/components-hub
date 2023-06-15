/* eslint-disable react-hooks/exhaustive-deps */
import { MiniatureProps } from '@/@types';
import AsideContent from '@/components/AsideContent';
import Header from '@/components/Header';
import HtmlHeader from '@/components/HtmlHeader';
import HubComponents from '@/components/HubComponents';
import { filterByNameOrCategory } from '@/functions/filterByNameOrCategory';
import useAppContext from '@/hooks/useAppContext';
import { filterCategory } from '@/utils/filterCategory';
import { useEffect, useState } from 'react';

export default function Home() {
	const {
		currentPage,
		miniatures,
		font,
		searchByNameOrCategory,
		setWindowWidth,
	} = useAppContext();
	const [filteredByName, setFilteredByName] = useState<MiniatureProps[] | null>(
		null,
	);
	const filteredByCategory = filterCategory(miniatures, currentPage);
	useEffect(() => {
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	});

	useEffect(() => {
		if (searchByNameOrCategory === '') {
			setFilteredByName(null);
			return;
		}

		const uniqueMiniatures = filterByNameOrCategory(
			miniatures,
			searchByNameOrCategory,
		);

		setFilteredByName(uniqueMiniatures);
	}, [searchByNameOrCategory]);

	return (
		<>
			<HtmlHeader />
			<main className={font.poppins.className}>
				<Header />
				<div
					style={{
						display: 'flex',
						position: 'fixed',
						width: '100vw',
					}}
				>
					<AsideContent />
					<HubComponents>
						{filteredByName &&
							filteredByName.length > 0 &&
							filteredByName.map((miniature) => ({
								...miniature.component,
								props: { isMiniature: true, miniature },
								key: miniature.id,
							}))}
						{filteredByName && filteredByName.length === 0 && (
							<h1>Nada encontrado</h1>
						)}
						{!filteredByName &&
							currentPage === 'início' &&
							miniatures.map((miniature) => ({
								...miniature.component,
								props: { isMiniature: true, miniature },
								key: miniature.id,
							}))}
						{!filteredByName &&
							filteredByCategory.map((miniature) => ({
								...miniature.component,
								props: { isMiniature: true, miniature },
								key: miniature.id,
							}))}
					</HubComponents>
				</div>
			</main>
		</>
	);
}
