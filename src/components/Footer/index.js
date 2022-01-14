import React from 'react';

import { Container } from './styles';

export default function Footer({ onToggleTheme, selectedTheme }) {
	return (
		<Container>
			<span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
			<button 
				type="button"
				onClick={onToggleTheme}
			>
				{selectedTheme === 'dark' ? '🌞' : '🌚'}
			</button>
		</Container>
	);
}