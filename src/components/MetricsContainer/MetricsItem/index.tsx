import React from 'react';
import { ComponentProps } from 'custom-types';
import classNames from 'classnames';
import Item from 'components/Item';
import AnimateNumber from 'components/AnimateNumber';
import { BLOCK } from '..';
import './style.scss';

interface MetricsItemProps extends ComponentProps {
	from?: number;
	to: number;
	duration?: number;
	span?: boolean;
	unit: string;
}

export default function MetricsItem({
	from = 0,
	to,
	duration = 700,
	span = false,
	className,
	children,
	unit,
}: MetricsItemProps) {
	return (
		<Item className={classNames(`${BLOCK}--item`, className)}>
			<strong>
				<AnimateNumber from={from} to={to} duration={duration} span /> {' ' + unit}
			</strong>
			의 {children}
		</Item>
	);
}
