import { useGlobalContext } from './Context';
import sublinks from './data';

const NavLinks = () => {
	const { setPageId } = useGlobalContext();

	return (
		<div className='nav-links'>
			{sublinks.map((item) => (
				<button
					key={item.pageId}
					className='nav-link'
					onMouseEnter={() => setPageId(item.pageId)}>
					{item.page}
				</button>
			))}
		</div>
	);
};

export default NavLinks;
