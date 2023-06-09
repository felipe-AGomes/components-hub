import S from './InvertedBorderRadiusCard.module.css';

export default function InvertedBorderRadiusCard() {
	return (
		<section
			className='component__page'
			id={S.contain}
		>
			<div className={S.card}>
				<div className={S.imgBx}></div>
				<div className={S.content}>
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
		</section>
	);
}
