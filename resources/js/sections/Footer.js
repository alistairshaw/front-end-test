import React from 'react';

export default function Footer(props) {
	return <footer>
		<section>
			<ul>
				<li><a href="#">Contact</a></li>
				<li><a href="#">Cookies & Privacy</a></li>
				<li><a href="#">Terms</a></li>
				<li><a href="#">Site Map</a></li>
			</ul>
		</section>
		<section>
			<ul>
				<li><a href="#"><i className="fa fa-facebook"/></a></li>
				<li><a href="#"><i className="fa fa-twitter"/></a></li>
			</ul>
		</section>
	</footer>
}