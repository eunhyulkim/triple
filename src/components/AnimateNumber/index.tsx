import React, { useEffect, useState } from 'react';
import { ComponentProps } from 'custom-types';
import Number from 'components/Number';

interface AnimateNumberProps extends ComponentProps {
	from?: number;
	to: number;
	duration?: number;
	span?: boolean;
}

export default function AnimateNumber({ from = 0, to, duration = 1000, span }: AnimateNumberProps) {
	const [animationProperty, setAnimationProperty] = useState({
		number: from,
		goal_timestamp: +new Date() + duration,
		to,
	});

	useEffect(() => {
		const { number, goal_timestamp, to } = animationProperty;
		if (number === to) {
			return;
		}

		const delay = (goal_timestamp - +new Date()) / (to - number);
		setTimeout(() => {
			setAnimationProperty((state) => {
				return { ...state, number: state.number + 1 };
			});
		}, delay);
	}, [animationProperty]);

	return <Number value={animationProperty.number} span={span} />;
}
