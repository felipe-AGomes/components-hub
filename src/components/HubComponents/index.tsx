type Props = {
	children: React.ReactNode;
};

export default function HubComponents({ children }: Props) {
	return (
		<section
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fill, 1fr)',
				justifyContent: 'center',
				gap: '20px',
				flexGrow: '1',
			}}
		>
			{children}
		</section>
	);
}
