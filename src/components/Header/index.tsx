import { AiFillGithub, AiOutlineSearch } from 'react-icons/ai';
import S from './Header.module.css';

export default function Header() {
	return (
		<header className={S.headerContain}>
			<div className={S.logoContain}>
				<h1>Logo Componentes React</h1>
			</div>
			<div className={S.searchBox}>
				<div className={S.inputContain}>
					<input
						className={S.searchInput}
						type='text'
						placeholder='categoria ou Nome do Componente'
					/>
					<AiOutlineSearch
						size={24}
						className={S.searchIcon}
					/>
				</div>

				<div className={S.linksContain}>
					<a href='#'>
						<AiFillGithub
							color={'#333e'}
							size={24}
						/>
					</a>
				</div>
			</div>
		</header>
	);
}
