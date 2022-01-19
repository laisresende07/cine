import React from 'react'

import { Container } from './styles'
import icon from '../../assets/icon.svg'

export default function Footer() {
	return (
		<Container>
			<span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
			<img src={icon} height={40} />
		</Container>
	);
}