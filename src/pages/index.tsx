import { ComponentsProps } from '@/@types';
import AsideContent from '@/components/AsideContent';
import Header from '@/components/Header';
import HtmlHeader from '@/components/HtmlHeader';
import HubComponents from '@/components/HubComponents';
import ShowHidePassword from '@/components/HubComponents/ShowHidePassword';
import MainContent from '@/components/MainContent';
import useCurrentPageContext from '@/hooks/useAppContext';
import { filterCategory } from '@/utils/filterCategory';

export default function Home() {
	const { currentPage, components } = useCurrentPageContext();

	const filteredCategory = filterCategory(components, currentPage);

	return (
		<>
			<HtmlHeader />
			<MainContent>
				<Header />
				<div style={{ display: 'flex' }}>
					<AsideContent />
					<HubComponents>
						{currentPage === 'início'
							? components.map((category) => category.component)
							: filteredCategory.map((category) => category.component)}
					</HubComponents>
				</div>
			</MainContent>
		</>
	);
}
