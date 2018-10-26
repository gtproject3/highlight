import react from 'React';
import './GlobalFooter.css';

const GlobalFooter = props => (

	<div>

		<nav id="footer" className="uk-navbar-container" uk-navbar="true">
			<div className="uk-navbar-center">   
				<ul className="uk-navbar-nav">
					<li><a target="_blank" href="https://github.com/gtproject3/highlight">SEE HIGHLIGHT on github &nbsp;<span uk-icon="github"></span></a></li>
				</ul>
			</div>
		</nav>

	</div>

);

export default GlobalFooter;