import { useGlobalContext } from './Context';
import sublinks from './data';

const Submenu = () => {
	const { pageId } = useGlobalContext();
	const currentPage = sublinks.find((item) => item.pageId === pageId);

	return (
		<div className={currentPage ? 'submenu show-submenu' : 'submenu'}>
			<h5>{currentPage?.page}</h5>
			<div
				className='submenu-links'
				style={{
					gridTemplateColumns:
						currentPage?.links?.length > 2 ? '1fr 1fr' : '1fr',
				}}>
				{currentPage?.links?.map((link) => (
					<a key={link.id} href={link.url}>
						{link.icon}
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default Submenu;
