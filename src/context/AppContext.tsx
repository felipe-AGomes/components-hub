import { MiniatureProps } from '@/@types';
import ShowHidePassword from '@/components/HubComponents/ShowHidePassword';
import InvertedBorderRadiusCard from '@/components/HubComponents/InvertedBorderRadiusCard';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Poppins } from '@next/font/google';
import { NextFont } from '@next/font';
import InvertedBorderRadius from '@/components/HubComponents/InvertedBorderRadius';
import MatrixLoginForm from '@/components/HubComponents/MatrixLoginForm';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

type AppContextProps = {
	currentPage: string;
	miniatures: MiniatureProps[];
	font: { poppins: NextFont };
	windowWidth: number;
	isMenuOpen: boolean;
	searchByNameOrCategory: string;
	setSearchByNameOrCategory: Dispatch<SetStateAction<string>>;
	setCurrentPage: Dispatch<SetStateAction<string>>;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
	setWindowWidth: Dispatch<SetStateAction<number>>;
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
	{
		id: 'MatrixLoginForm',
		component: <MatrixLoginForm />,
		category: 'login page',
		name: 'Matrix Login Form',
		repo:
			'https://github.com/felipe-AGomes/components-hub/tree/master/src/components/HubComponents/MatrixLoginForm',
	},
];

export const AppContext = createContext<AppContextProps>({
	currentPage: 'início',
	windowWidth: 0,
	miniatures,
	font: { poppins },
	isMenuOpen: false,
	searchByNameOrCategory: '',
	setSearchByNameOrCategory() {},
	setIsMenuOpen() {},
	setWindowWidth() {},
	setCurrentPage() {},
});

export default function CurrentPageContextProvider({ children }: Props) {
	const [currentPage, setCurrentPage] = useState('início');
	const [windowWidth, setWindowWidth] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchByNameOrCategory, setSearchByNameOrCategory] = useState('');

	return (
		<AppContext.Provider
			value={{
				isMenuOpen,
				currentPage,
				miniatures,
				font: { poppins },
				windowWidth,
				searchByNameOrCategory,
				setSearchByNameOrCategory,
				setIsMenuOpen,
				setCurrentPage,
				setWindowWidth,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
