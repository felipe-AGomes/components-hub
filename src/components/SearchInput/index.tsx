import S from './SearchInput.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchInput() {
	return (
		<div className={S.inputContain}>
			<input
				className={S.searchInput}
				type='text'
				placeholder='categoria ou Nome do Componente'
			/>
			<AiOutlineSearch size={24} />
		</div>
	);
}
