import { useState } from 'react';
import S from './SearchInput.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import useAppContext from '@/hooks/useAppContext';

export default function SearchInput() {
	const { searchByNameOrCategory, setSearchByNameOrCategory } = useAppContext();
	const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={handleChange}
			className={S.inputContain}
		>
			<input
				className={S.searchInput}
				type='text'
				placeholder='categoria ou Nome do Componente'
				onChange={(e) => setSearchByNameOrCategory(e.target.value)}
				value={searchByNameOrCategory}
			/>
			<AiOutlineSearch size={24} />
		</form>
	);
}
