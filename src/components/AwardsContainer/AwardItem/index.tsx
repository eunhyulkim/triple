import React from 'react';
import { ComponentProps } from 'custom-types';
import classNames from 'classnames';
import Item from 'components/Item';
import { BLOCK } from '..';
import './style.scss';

interface AwardItemProps extends ComponentProps {
	url: string;
}

export default function AwardItem({ url, className, children }: AwardItemProps) {
	const style = {
		backgroundImage: `url(${url})`,
	};

	return (
		<Item style={style} className={classNames(`${BLOCK}--item`, className)}>
			{children}
		</Item>
	);
}
