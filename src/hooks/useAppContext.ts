import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';

export default function useAppContext() {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('Fora do escopo do context currentPage');
	}

	return context;
}
