import { MiniatureProps } from '@/@types';
import S from './ContainMiniature.module.css';
import { clickMiniature } from '@/functions/clickMiniature';

type Props = {
	children: React.ReactNode;
	style?: React.CSSProperties;
	miniature?: MiniatureProps;
};

const { handleClickRepositorio, handleClickVizualizar } = clickMiniature();

export default function ContainMiniature({
	children,
	miniature,
	style,
}: Props) {
	return (
		<section
			className='component__page-miniature'
			id={S.containMiniature}
			style={{ ...style }}
		>
			<div className={S.cardTitle}>
				<h3>{miniature?.name}</h3>
			</div>
			<div className={S.containButtonMiniature}>
				<button
					onClick={() => {
						handleClickVizualizar(miniature ? miniature.id : '');
					}}
					type='button'
					style={{ fontFamily: 'inherit' }}
				>
					Vizualizar
				</button>
				<button
					onClick={() => {
						handleClickRepositorio(miniature ? miniature.repo : '');
					}}
					type='button'
					style={{ fontFamily: 'inherit' }}
				>
					Repositório
				</button>
			</div>
			{children}
		</section>
	);
}
