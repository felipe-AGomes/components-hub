import CurrentPageContextProvider from '@/context/currentPageContext';

type Props = {
	children: React.ReactNode;
};

export default function ContextProviders({ children }: Props) {
	return <CurrentPageContextProvider>{children}</CurrentPageContextProvider>;
}
