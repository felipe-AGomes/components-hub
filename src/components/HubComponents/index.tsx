type Props = {
	children: React.ReactNode;
};

export default function HubComponents({ children }: Props) {
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

				padding: '60px 20px 20px',
			}}
		>
			{children}
		</section>
	);
}
