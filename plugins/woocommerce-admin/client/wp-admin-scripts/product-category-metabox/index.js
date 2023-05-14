/**
 * External dependencies
 */
import { render, Suspense, lazy } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getSelectedCategoryData } from './category-handlers';
import './style.scss';

const CategoryMetabox = lazy( () =>
	import( /* webpackChunkName: "category-metabox" */ './category-metabox' )
);

const metaboxContainer = document.querySelector(
	'#taxonomy-product_cat-metabox'
);
if ( metaboxContainer ) {
	const initialSelected = getSelectedCategoryData(
		metaboxContainer.parentElement
	);
	render(
		<Suspense fallback={ null }>
			<CategoryMetabox initialSelected={ initialSelected } />
		</Suspense>,
		metaboxContainer
	);
}
