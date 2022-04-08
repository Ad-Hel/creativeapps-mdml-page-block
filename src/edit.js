import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
import './editor.scss';

export default function edit(props) {
	const { attributes, setAttributes } = props;
	const MY_TEMPLATE = [['core/paragraph']];
	const MySelectControl = withState({
		// this is your state, in this case display-2 would be the default
		style: 'bg-white',
	})(({ style, setState }) => (
		<SelectControl
			label="Style"
			value={attributes.styleClass}
			options={[
				{ label: 'Blanc', value: 'bg-white' },
				{ label: 'Primaire', value: 'bg-primary text-white' },
				{ label: 'Secondaire', value: 'bg-secondary text-white' },
			]}
			onChange={(style) => {
				setState({ style }), setAttributes({ styleClass: style });
			}}
		/>
	));
	let classes =
		'col-12 col-md-6 col-xl-5 col-xxl-4 mdml-page ' + attributes.styleClass;

	return (
		<>
			<div {...useBlockProps()} className={classes}>
				<InnerBlocks
					template={MY_TEMPLATE}
					allowedBlocks={[
						'core/spacer',
						'eedee/block-gutenslider',
						'core/html',
						'core/columns',
						'core/file',
						'core/gallery',
						'core/image',
						'core/video',
						'core/heading',
						'core/paragraph',
						'core/list',
						'core/embed',
						'creativeapps/mdml-button-block',
						'create-block/mdml-illustration'
					]}
				/>
			</div>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<MySelectControl />
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
