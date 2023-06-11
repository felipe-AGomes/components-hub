import { MiniatureProps } from '@/@types';
import ShowHidePassword from '@/components/HubComponents/ShowHidePassword';
import InvertedBorderRadiusCard from '@/components/HubComponents/InvertedBorderRadiusCard';
import { createContext, useState } from 'react';
import { Poppins } from '@next/font/google';
import { NextFont } from '@next/font';
import InvertedBorderRadius from '@/components/HubComponents/InvertedBorderRadius';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

type AppContextProps = {
	currentPage: string;
	miniatures: MiniatureProps[];
	font: { poppins: NextFont };
	setCurrentPage: (newValue: string) => void;
};

type Props = {
	children: React.ReactNode;
};

const miniatures: MiniatureProps[] = [
	{
		id: 'showHidePassword',
		component: <ShowHidePassword />,
		category: 'formularios',
		name: 'Show Hide Password',
		repo:
			'https://github.com/felipe-AGomes/components-hub/tree/master/src/components/HubComponents/ShowHidePassword',
	},
	{
		id: 'invertedBorderRadiusCard',
		component: <InvertedBorderRadiusCard />,
		category: 'card',
		name: 'Inverted Border Radius Card',
		repo:
			'https://github.com/felipe-AGomes/components-hub/tree/master/src/components/HubComponents/InvertedBorderRadiusCard',
	},
	{
		id: 'InvertedBorderRadius',
		component: <InvertedBorderRadius />,
		category: 'card',
		name: 'Inverted Border Radius',
		repo:
			'https://github.com/felipe-AGomes/components-hub/tree/master/src/components/HubComponents/InvertedBorderRadius',
	},
];

export const AppContext = createContext<AppContextProps>({
	currentPage: 'início',
	miniatures,
	font: { poppins },
	setCurrentPage() {},
});

export default function CurrentPageContextProvider({ children }: Props) {
	const [currentPage, setCurrentPage] = useState('início');

	return (
		<AppContext.Provider
			value={{ currentPage, miniatures, font: { poppins }, setCurrentPage }}
		>
			{children}
		</AppContext.Provider>
	);
}
