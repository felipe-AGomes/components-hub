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
	const router = useRouter();

	const handleClickVizualizar = (miniatureId: string) => {
		router.push(`/project/${miniatureId}`);
	};

	const handleClickRepositorio = (miniatureRepo: string) => {
		console.log('Repositório');
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
				>
					Vizualizar
				</button>
				<button
					onClick={() => {
						handleClickRepositorio(miniature.repo);
					}}
					type='button'
				>
					Repositório
				</button>
			</div>
			{children}
		</section>
	);
}
