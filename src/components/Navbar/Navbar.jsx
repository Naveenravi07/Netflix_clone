import React from 'react'
import './Navbar.css'

function Navbar() {
	return (
		<div className='navbar'>
			<img className='logo'
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
				alt="" />
			<img className='avatar' src="/images/avatar.png" alt="" />

			<div className='texts'>
				<h4 className='ptext'>Home</h4>
				<h4 className='ptext'>Shows</h4>
				<h4 className='ptext'>Movies </h4>
				<h4 className='ptext'>MyList</h4>
			</div>

			<div className='btnsdiv'>
				<span className="material-symbols-outlined searchicon">
					search
				</span>
				<h4 className='searchicon'>Shastri</h4>
				<span className="material-symbols-outlined searchicon">
					notifications
				</span>

			</div>
			<span className="material-symbols-outlined hamburger">
				menu
			</span>
		</div>
	)
}

export default Navbar
