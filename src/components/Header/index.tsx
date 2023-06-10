import S from './Header.module.css';
import SearchInput from '../SearchInput';
import GitHubLink from '../GitHubLink';

export default function Header() {
	return (
		<header className={S.headerContain}>
			<div className={S.logoContain}>
				<h1>Componentes React</h1>
			</div>
			<div className={S.searchBox}>
				<SearchInput />
				<GitHubLink />
			</div>
		</header>
	);
}
