import React from 'react';
import { ComponentProps } from 'custom-types';
import classNames from 'classnames';

interface ItemProps extends ComponentProps {}

export default function Item({ style, className, children }: ItemProps) {
	return (
		<div style={style} className={classNames(className)}>
			{children}
		</div>
	);
}
