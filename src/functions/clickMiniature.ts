export const clickMiniature = () => {
	const handleClickVizualizar = (miniatureId: string) => {
		window.open(`/project/${miniatureId}`, '_blank');
	};

	const handleClickRepositorio = (miniatureRepo: string) => {
		window.open(miniatureRepo, '_blank');
	};

	return { handleClickRepositorio, handleClickVizualizar };
};
