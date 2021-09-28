import React from 'react';
import { ComponentProps } from 'custom-types';
import classNames from 'classnames';
import { BLOCK as PARENT_BLOCK } from 'pages/IntroPage';
import MetricsItem from './MetricsItem';
import './style.scss';

interface MetricsContainerProps extends ComponentProps {}

export const BLOCK = 'metrics-container';

const metrics = [
	{ value: 350, unit: '만 명', content: '사용자' },
	{ value: 21, unit: '만 개', content: '리뷰' },
	{ value: 650, unit: '만 개', content: '저장' },
];

export default function MetricsContainer({ className, children }: MetricsContainerProps) {
	return (
		<div className={classNames(`${PARENT_BLOCK}--${BLOCK}`, className)}>
			{metrics.map((metric) => (
				<MetricsItem key={metric.content} to={metric.value} unit={metric.unit}>
					{metric.content}
				</MetricsItem>
			))}
			{children}
		</div>
	);
}
