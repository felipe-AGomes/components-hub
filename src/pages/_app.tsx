import ContextProviders from '@/providers/ContextProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ContextProviders>
			<Component {...pageProps} />
		</ContextProviders>
	);
}
