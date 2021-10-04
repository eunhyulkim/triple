import React from 'react';
import Section from 'components/Section';
import Logo from 'components/Logo';
import MetricsContainer from 'components/MetricsContainer';
import AwardsContainer from 'components/AwardsContainer';
import './style.scss';

export const BLOCK = 'statistic-section';
const ELEMENT = 'content-logo';
const LOGO_URL = '/intro/images/triple@2x.png';

export default function IntroPage() {
	return (
		<div className="intro-page">
			<Section className={BLOCK}>
				<Logo className={`${BLOCK}__${ELEMENT}`} url={LOGO_URL}>
					2019년 2월 기준
				</Logo>
				<MetricsContainer></MetricsContainer>
				<AwardsContainer></AwardsContainer>
			</Section>
			;
		</div>
	);
}
