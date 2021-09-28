import React from 'react';
import { ComponentProps } from 'custom-types';
import classNames from 'classnames';

interface NumberProps extends ComponentProps {
	value?: number;
	span?: boolean;
}

export default function Number({ className, value = 0, span = false }: NumberProps) {
	if (span) {
		return <span className={classNames(className)}>{value}</span>;
	}
	return <div className={classNames(className)}>{value}</div>;
}
