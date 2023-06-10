import { MiniatureProps } from '@/@types';
import ShowHidePassword from '@/components/HubComponents/ShowHidePassword';
import InvertedBorderRadiusCard from '@/components/HubComponents/InvertedBorderRadiusCard';
import { createContext, useState } from 'react';

type AppContextProps = {
	currentPage: string;
	miniatures: MiniatureProps[];
	setCurrentPage: (newValue: string) => void;
};

type Props = {
	children: React.ReactNode;
};

const miniatures: MiniatureProps[] = [
	{
		id: 'showHidePassword',
		component: <ShowHidePassword isMiniature />,
		category: 'formularios',
		name: 'Show Hide Password',
		repo: '#',
	},
	{
		id: 'invertedBorderRadiusCard',
		component: <InvertedBorderRadiusCard isMiniature />,
		category: 'card',
		name: 'Inverted Border Radius Card',
		repo: '#',
	},
];

export const AppContext = createContext<AppContextProps>({
	currentPage: 'início',
	miniatures,
	setCurrentPage() {},
});

export default function CurrentPageContextProvider({ children }: Props) {
	const [currentPage, setCurrentPage] = useState('início');

	return (
		<AppContext.Provider value={{ currentPage, miniatures, setCurrentPage }}>
			{children}
		</AppContext.Provider>
	);
}
