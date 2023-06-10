/* eslint-disable react-hooks/exhaustive-deps */
import useAppContext from '@/hooks/useAppContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MiniatureItem() {
	const router = useRouter();
	const { miniatures } = useAppContext();
	const [component, setComponent] = useState<JSX.Element | null>(null);
	const { miniature } = router.query;

	useEffect(() => {
		if (!miniature) {
			return;
		}

		const result = miniatures.find(({ id }) => id === miniature);

		if (!result) {
			throw new Error('Miniatura não existe');
		}

		const { component } = result;

		setComponent(component);
	}, [miniature]);

	return <>{component}</>;
}
