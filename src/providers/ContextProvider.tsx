import AppContext from '@/context/AppContext';

type Props = {
	children: React.ReactNode;
};

export default function ContextProviders({ children }: Props) {
	return <AppContext>{children}</AppContext>;
}
