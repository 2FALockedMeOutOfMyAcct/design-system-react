/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable jsx-a11y/no-redundant-roles */

// # Page Header Component

// Implements the [Page Header design pattern](https://www.lightningdesignsystem.com/components/page-headers) in React.
// Based on SLDS v2.2.1

// ## Dependencies

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// This component's `checkProps` which issues warnings to developers about properties when in development mode (similar to React's built in development tools)
import checkProps from './check-props';
import componentDoc from './docs.json';

import Info from './private/info';
import Title from './private/title';
import DetailRow from './private/detail-row';
import DetailBlock from './private/detail-block';
import Base from './private/base';
import RecordHome from './private/record-home';
import ObjectHome from './private/object-home';
import RelatedList from './private/related-list';

// ## Constants
import { PAGE_HEADER } from '../../utilities/constants';

const displayName = PAGE_HEADER;
const propTypes = {
	/**
	 * Optional class name
	 */
	className: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.string,
	]),
	/**
	 * An array of detail blocks (used in "recordHome" variant)
	 */
	details: PropTypes.array,
	/**
	 * The label property can be a string or a React element
	 */
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	/**
	 * The page header icon
	 */
	icon: PropTypes.element,
	/**
	 * The icons category
	 */
	iconCategory: PropTypes.oneOf([
		'action',
		'custom',
		'doctype',
		'standard',
		'utility',
	]),
	/**
	 * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
	 */
	iconName: PropTypes.string,
	/**
	 * If omitted, icon position is centered.
	 */
	iconPosition: PropTypes.oneOf(['left', 'right']),
	/**
	 * Determines the size of the icon.
	 */
	iconSize: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
	/**
	 * For icon variants, please reference <a href='http://www.lightningdesignsystem.com/components/buttons/#icon'>Lightning Design System Icons</a>.
	 */
	iconVariant: PropTypes.oneOf([
		'container',
		'border',
		'border-filled',
		'small',
		'more',
	]),
	/**
	 * The info property can be a string or a React element
	 */
	info: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	/**
	 * Used with the `object-home` variant, accepts a node, typically a Dropdown component
	 */
	nameSwitcherDropdown: PropTypes.node,
	/**
	 * Content to appear on the right hand side of the page header
	 * prop 'contentRight' will be deprecated soon, use 'onRenderActions' instead
	 */
	onRenderActions: PropTypes.func,
	/**
	 * Nav content which appears in the upper right hand corner.
	 * prop 'navRight' will be deprecated soon, use 'onRenderControls' instead
	 */
	onRenderControls: PropTypes.func,
	/**
	 * The title property can be a string or a React element
	 */
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	/**
	 * An array of react elements presumably anchor <a> elements.
	 */
	trail: PropTypes.array,
	/**
	 * The type of component
	 * Note: Extra options are added to make the version backward compatible
	 */
	variant: PropTypes.oneOf([
		'base',
		'object-home',
		'record-home',
		'related-list',
	]),
};

const defaultProps = {
	variant: 'base'
};

/**
 * The PageHeader component adds PageHeader, PageHeader.Info, PageHeader.Title, PageHeader.DetailRow, and PageHeader.DetailBlock.
 */
class PageHeader extends Component {
	componentDidMount() {
		checkProps(PAGE_HEADER, this.props, componentDoc);
	}

	render() {
		const { className, variant } = this.props;
		const classes = classnames(
			'slds-page-header',
			{
				'slds-page-header_record-home':
					variant === 'record-home' ||
					variant === 'recordHome',
				'slds-page-header_related-list':
					variant === 'related-list' ||
					variant === 'relatedList'
			},
			className
		);
		let Variant;

		switch (variant) {
			case 'object-home':
			case 'objectHome': // For backward compatibility
				Variant = ObjectHome;
				break;
			case 'record-home':
			case 'recordHome': // For backward compatibility
				Variant = RecordHome;
				break;
			case 'related-list':
			case 'relatedList': // For backward compatibility
				Variant = RelatedList;
				break;
			default:
				Variant = Base;
		}

		return (
			<div className={classes}>
				<Variant {...this.props} />
			</div>
		);
	}
}

PageHeader.displayName = displayName;
PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;

// NOTE: these are private components and are prone to breaking changes.
// Do not use these in your app! These exports are for legacy use only.
export { Info, Title, DetailRow, DetailBlock };
