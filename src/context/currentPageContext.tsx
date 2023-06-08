import { createContext, useState } from 'react';

type CurrentPageContextProps = {
	currentPage: string;
	setCurrentPage: (newValue: string) => void;
};

type Props = {
	children: React.ReactNode;
};

export const CurrentPageContext = createContext<CurrentPageContextProps>({
	currentPage: 'início',
	setCurrentPage() {},
});

export default function CurrentPageContextProvider({ children }: Props) {
	const [currentPage, setCurrentPage] = useState('início');

	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</CurrentPageContext.Provider>
	);
}
