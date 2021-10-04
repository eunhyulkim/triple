import React from 'react';
import { ComponentProps } from 'custom-types';
import classNames from 'classnames';
import { BLOCK as PARENT_BLOCK } from 'pages/IntroPage';
import AwardItem from './AwardItem';
import './style.scss';

interface AwardsContainerProps extends ComponentProps {}

export const BLOCK = 'awards-container';
const awards = [
	{
		url: '/intro/images/play-store@2x.png',
		text: ['2018 구글 플레이스토어', <br />, '올해의 앱 최우수상 수상'],
	},
	{
		url: '/intro/images/app-store@2x.png',
		text: ['2018 애플 앱스토어', <br />, '오늘의 여행앱 선정'],
	},
];

export default function AwardsContainer({ className, children }: AwardsContainerProps) {
	return (
		<div className={classNames(`${PARENT_BLOCK}__${BLOCK}`, className)}>
			{awards.map((award, idx) => (
				<AwardItem key={idx} url={award.url}>
					{award.text}
				</AwardItem>
			))}
			{children}
		</div>
	);
}
