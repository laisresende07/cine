import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";

import { Container } from './styles'
import logo from '../../assets/cine.svg'

export default function Header({ onToggleTheme, selectedTheme }) {
	return (
		<Container>
			<Link 
				to={'/'}
			>
				<AiFillHome color={selectedTheme === 'dark' ? '#fff' : '#222'} size={24} />
			</Link>

			<img src={logo} alt={'cine'} height={50} />

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