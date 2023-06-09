import { ComponentsProps } from '@/@types';
import ShowHidePassword from '@/components/HubComponents/ShowHidePassword';
import { createContext, useState } from 'react';

type AppContextProps = {
	currentPage: string;
	components: ComponentsProps[];
	setCurrentPage: (newValue: string) => void;
};

type Props = {
	children: React.ReactNode;
};

const components: ComponentsProps[] = [
	{
		id: 'showHidePassword',
		component: <ShowHidePassword />,
		category: 'formularios',
		name: 'Show Hide Password',
	},
];

export const AppContext = createContext<AppContextProps>({
	currentPage: 'início',
	components,
	setCurrentPage() {},
});

export default function CurrentPageContextProvider({ children }: Props) {
	const [currentPage, setCurrentPage] = useState('início');

	return (
		<AppContext.Provider value={{ currentPage, components, setCurrentPage }}>
			{children}
		</AppContext.Provider>
	);
}