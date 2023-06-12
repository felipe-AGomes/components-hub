import { MiniatureProps } from '@/@types';
import S from './MatrixLoginForm.module.css';
import ContainMiniature from '@/components/ContainMiniature';
import useAppContext from '@/hooks/useAppContext';
import { useEffect } from 'react';

type Props = {
	isMiniature?: boolean;
	miniature?: MiniatureProps;
};

export default function MatrixLoginForm({ isMiniature, miniature }: Props) {
	const { font } = useAppContext();

	useEffect(() => {
		if (!miniature) {
			return;
		}
	}, [miniature]);

	return (
		<>
			{isMiniature ? (
				<ContainMiniature
					style={{ background: '#000' }}
					miniature={miniature}
				>
					<div></div>
				</ContainMiniature>
			) : (
				<section
					className='component__page'
					id={S.contain}
				>
					<div className={S.pageContain}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<div className={`${S.formContain} ${font.poppins.className}`}>
							<h1>sign in</h1>
							<form>
								<div className={S.inputContain}>
									<input
										type='text'
										id='user'
										required
									/>
									<label htmlFor='user'>Usuário</label>
								</div>
								<div className={S.inputContain}>
									<input
										type='password'
										id='password'
										required
									/>
									<label htmlFor='password'>Senha</label>
								</div>
								<div className={S.links}>
									<a href='#'>Esqueci minha senha</a>
									<a
										href='#'
										className={S.register}
									>
										Registrar
									</a>
								</div>
								<button>Enviar</button>
							</form>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
