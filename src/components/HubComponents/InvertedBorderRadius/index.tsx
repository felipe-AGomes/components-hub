import { MiniatureProps } from '@/@types';
import S from './InvertedBorderRadius.module.css';
import ContainMiniature from '@/components/ContainMiniature';
import useAppContext from '@/hooks/useAppContext';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { useEffect } from 'react';

type Props = {
	isMiniature?: boolean;
	miniature?: MiniatureProps;
};

export default function InvertedBorderRadius({
	isMiniature,
	miniature,
}: Props) {
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
					style={{ background: '#bfc0c0' }}
					miniature={miniature}
				>
					<div></div>
				</ContainMiniature>
			) : (
				<section
					className='component__page'
					id={S.contain}
				>
					<div className={`${S.cardContain} ${font.poppins.className}`}>
						<div className={S.iconContain}>
							<HiOutlineRocketLaunch size={42} color='#fff' />
						</div>
						<div className={S.content}>
							<h3>Launch</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque
								consequatur autem quae delectus
							</p>
							<button type='button'>Launch</button>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
