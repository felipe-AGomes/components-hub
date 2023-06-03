import { useState } from 'react';
import S from './AsideContent.module.css';

export default function AsideContent() {
	const [active, setActive] = useState<string>('');
	const categories = ['card', 'formularios', 'loading', 'listas']; // Deve conter todas as categorias existentes

	const handleClick = (category: string) => {
		setActive(category);
	};

	return (
		<aside className={S.asideContain}>
			<ul>
				{categories.map((category) => {
					return (
						<li
							key={category}
							className={`${category === active ? S.active : ''}`}
							onClick={() => {
								handleClick(category);
							}}
						>
							{category.toUpperCase()}
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
