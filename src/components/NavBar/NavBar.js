import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faBlog } from '@fortawesome/free-solid-svg-icons/faBlog';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import './NavBar.css';

export const NavBar = () => {
	const [ currentItem, setCurrentItem ] = useState('/');
	return (
		<div className="top-nav ">
			<Menu className="container" mode="horizontal" theme="dark" selectedKeys={[ currentItem ]}>
				<Menu.Item key="/" icon={<FontAwesomeIcon style={{ marginRight: '5px' }} icon={faHome} />}>
					<NavLink
						to="/"
						exact
						isActive={(match) => {
							if (!match) return false;
							setCurrentItem('/');
							return true;
						}}
						className="nav-link"
					/>
					Home
				</Menu.Item>
				
				<Menu.Item key="/blogs" icon={<FontAwesomeIcon style={{ marginRight: '5px' }} icon={faBlog} />}>
					<NavLink
						to="/blogs"
						isActive={(match) => {
							if (!match) return false;
							setCurrentItem('/blogs');
							return true;
						}}
						className="nav-link"
					/>
					Blog
				</Menu.Item>
				{/* <Menu.Item key="/about" icon={<FontAwesomeIcon style={{ marginRight: '5px' }} icon={faUser} />}>
					<NavLink
						to="/about"
						isActive={(match) => {
							if (!match) return false;
							setCurrentItem('/about');
							return true;
						}}
						className="nav-link"
					/>
					About me
				</Menu.Item> */}
				<Menu.Item key="/manager" icon={<FontAwesomeIcon style={{ marginRight: '5px' }} icon={faUser} />}>
					<NavLink
						to="/manager"
						isActive={(match) => {
							if (!match) return false;
							setCurrentItem('/manager');
							return true;
						}}
						className="nav-link"
					/>
					Manager
				</Menu.Item>
			</Menu>
		</div>
	);
};
