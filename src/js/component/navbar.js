import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

export const Navbar = () => {
	const [favoriteItems, setFavoriteItems] = useState([]);
	const {store, actions} = useContext(Context)

	useEffect(() => {
		console.log('favorites', store.favorites)
		setFavoriteItems(store.favorites)
	}, [store.favorites])

	return (
		
		<nav className="navbar navbar-black bg-black mb-0">
			<Link to="/">
				<span style={{marginLeft: '4rem', color: 'gold'}} className="navbar-brand mb-0 h1"><img className="navLogo" src="https://www.freepnglogos.com/uploads/star-wars-logo-1.png" alt="StarWars logo" width="70" height="60"></img></span>
			</Link>
			<div style={{marginRight: '4rem'}} class="dropdown">
				<button class="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<p class="favorites">Favorites</p>
				</button>
				<ul class="dropdown-menu">
					{favoriteItems.length ? favoriteItems.map(item => {
						return (
							<li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} class="dropdown-item">{item.character ? item.character.name : item.planet ? item.planet.name : item.vehicle ? item.vehicle.name : null}<button onClick={() => {actions.removeFavorite(item)}}>X</button></li>
						)
					}) : <li style={{display: 'flex', justifyContent: 'center'}}>No favorites.</li>}
				</ul>
			</div>
		</nav>
	);
};
