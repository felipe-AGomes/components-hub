import { MiniatureProps } from '@/@types';
import S from './ContainMiniature.module.css';

type Props = {
	children: React.ReactNode;
	style?: React.CSSProperties;
	miniature?: MiniatureProps;
};

export default function ContainMiniature({
	children,
	miniature,
	style,
}: Props) {
	const handleClickVizualizar = (miniatureId: string) => {
		window.open(`/project/${miniatureId}`, '_blank');
	};

	const handleClickRepositorio = (miniatureRepo: string) => {
		window.open(miniatureRepo, '_blank');
	};

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
