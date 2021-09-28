import React from 'react';
import { ComponentProps } from 'custom-types';
import classNames from 'classnames';

interface LogoProps extends ComponentProps {
	url: string;
}

export default function Logo({ className, children, url }: LogoProps) {
	const style = {
		backgroundImage: `url(${url})`,
	};

	return (
		<div style={style} className={classNames(className)}>
			{children}
		</div>
	);
}
