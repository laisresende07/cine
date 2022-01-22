import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import logo from '../../assets/cine.svg'

export default function Header({ onToggleTheme, selectedTheme }) {
	return (
		<Container>
			<div>
				<Link 
					to={'/'}
				>
					<img src={logo} alt={'cine'} height={50} />
				</Link>

				<Link to={'/movies'}>Filmes</Link>
				<Link to={'/tv'}>Séries</Link>
			</div>
			
			<button 
				type="button"
				onClick={onToggleTheme}
				style={{fontSize: 22}}
			>
				{selectedTheme === 'dark' ? '🌞' : '🌚'}
			</button>
		</Container>
	);
}