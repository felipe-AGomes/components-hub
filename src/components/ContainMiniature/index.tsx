import { MiniatureProps } from '@/@types';
import S from './ContainMiniature.module.css';
import { useRouter } from 'next/router';

type Props = {
	children: React.ReactNode;
	style?: React.CSSProperties;
	miniature: MiniatureProps;
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
		console.log('Repositório: ', miniatureRepo);
	};

	return (
		<section
			className='component__page-miniature'
			id={S.containMiniature}
			style={{ ...style }}
		>
			<div className={S.containButtonMiniature}>
				<button
					onClick={() => {
						handleClickVizualizar(miniature.id);
					}}
					type='button'
					style={{ fontFamily: 'inherit' }}
				>
					Vizualizar
				</button>
				<button
					onClick={() => {
						handleClickRepositorio(miniature.repo);
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
