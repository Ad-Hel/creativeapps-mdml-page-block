import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

//function addBackgroundColorStyle( props ) {
//    return lodash.assign( props, { style: { backgroundColor: 'white' } } );
//}
//
//wp.hooks.addFilter(
//    'blocks.getSaveContent.extraProps',
//    'my-plugin/add-background-color-style',
//    addBackgroundColorStyle
//);col-12 col-md-6 col-xl-5 col-xxl-4 bg-white mdml-page

export default function save(props) {
	const { attributes } = props;
	let classes =
		'col-12 col-md-6 col-xl-5 col-xxl-4 mdml-page ' + attributes.styleClass;

	return (
		<div className={'row justify-content-center'}>
			<div className={classes}>
				<div {...useBlockProps.save()}>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
