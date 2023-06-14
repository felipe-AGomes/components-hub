import useAppContext from '@/hooks/useAppContext';

type Props = {
	children: React.ReactNode;
};

export default function HubComponents({ children }: Props) {
	const { windowWidth } = useAppContext();
	const lessOrEqualThen700 = windowWidth <= 700;

	return (
		<section
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, 300px)',
				gridTemplateRows: 'min-content',
				justifyContent: 'center',
				gap: '20px',
				rowGap: '60px',
				flexGrow: '1',

				width: '100%',
				height: 'calc(100vh - 140px)',
				marginTop: lessOrEqualThen700 ? '120px' : '80px',
				padding: '60px 20px 20px',
			}}
		>
			{children}
		</section>
	);
}
