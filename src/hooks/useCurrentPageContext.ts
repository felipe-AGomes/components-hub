import { CurrentPageContext } from '@/context/currentPageContext';
import { useContext } from 'react';

export default function useCurrentPageContext() {
	const context = useContext(CurrentPageContext);

	if (!context) {
		throw new Error('Fora do escopo do context currentPage');
	}

	return context;
}
