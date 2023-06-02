import { Poppins } from '@next/font/google';
import Header from '../Header';
import React from 'react';

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

type Props = {
	children: React.ReactNode;
};

export default function MainContent({ children }: Props) {
	return <main className={`${poppins.className} main-content`}>{children}</main>;
}
