import S from './Header.module.css';
import SearchInput from '../SearchInput';
import GitHubLink from '../GitHubLink';
import useAppContext from '@/hooks/useAppContext';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

export default function Header() {
	const { windowWidth, isMenuOpen, setIsMenuOpen } = useAppContext();

	const handleMenuOpenClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			{windowWidth > 700 ? (
				<header className={S.headerContain}>
					<div className={S.logoContain}>
						<h1>Componentes React</h1>
					</div>
					<div className={S.searchBox}>
						<SearchInput />
						<GitHubLink />
					</div>
				</header>
			) : (
				<header className={S.headerContainMobile}>
					<div className={S.logoContainMobile}>
						<h1>Componentes React</h1>
						{isMenuOpen && (
							<AiOutlineClose
								style={{ zIndex: '2' }}
								size={24}
								onClick={handleMenuOpenClick}
							/>
						)}
						{!isMenuOpen && (
							<AiOutlineMenu
								style={{ zIndex: '2' }}
								size={24}
								onClick={handleMenuOpenClick}
							/>
						)}
					</div>
					<div className={S.searchBoxMobile}>
						<SearchInput />
						<GitHubLink />
					</div>
				</header>
			)}
		</>
	);
}
