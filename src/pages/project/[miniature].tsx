import { useRouter } from 'next/router';

export default function MiniatureItem() {
	const router = useRouter();
	const { hubItem } = router.query;
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
			}}
		>
			{hubItem}
		</div>
	);
}
