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
				flexGrow: '1',

				padding: '20px',
			}}
		>
			{children}
		</section>
	);
}
