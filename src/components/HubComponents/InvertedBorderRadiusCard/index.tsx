/* eslint-disable @next/next/no-img-element */
import ContainMiniature from '@/components/ContainMiniature';
import S from './InvertedBorderRadiusCard.module.css';
import useAppContext from '@/hooks/useAppContext';
import { MiniatureProps } from '@/@types';
import { useEffect } from 'react';

type Props = {
	isMiniature?: boolean;
	miniature?: MiniatureProps;
};

export default function InvertedBorderRadiusCard({
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
					<div className={S.boxMiniature}>
						<div className={S.cardMiniature}>
							<div className={S.imgBxMiniature}>
								<img
									src='/InvertedBorderRadiusCard/house.jpg'
									alt='house image'
								/>
							</div>
							<div className={S.contentMiniature}>
								<span className={S.priceMiniature}>
									<a href='#'>$1.000,00</a>
								</span>
								<ul>
									<li>Somewhere</li>
									<li>1200sqm</li>
									<li>House</li>
								</ul>
							</div>
						</div>
					</div>
				</ContainMiniature>
			) : (
				<section
					className='component__page'
					id={S.contain}
				>
					<div className={S.box}>
						<div className={S.card}>
							<div className={S.imgBx}></div>
							<div className={`${S.content} ${font.poppins.className}`}>
								<span className={S.price}>
									<a href='#'>$1.000,00</a>
								</span>
								<ul>
									<li>Somewhere</li>
									<li>1200sqm</li>
									<li>House</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
