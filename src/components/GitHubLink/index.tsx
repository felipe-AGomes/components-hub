import { AiFillGithub } from 'react-icons/ai';
import S from './GitHubLink.module.css';

export default function GitHubLink() {
	return (
		<div>
			<a href='#'>
				<AiFillGithub
					color={'#333e'}
					size={24}
				/>
			</a>
		</div>
	);
}
