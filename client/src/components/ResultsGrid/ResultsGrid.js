import react from 'React';
import './ResultsGrid.css';
import AuthorCard from '../AuthorCard';

const ResultsGrid = props => (

	<div>
		<div class="uk-child-width-expand@s uk-grid-match" uk-grid="true">
			<AuthorCard />
			<AuthorCard />			
		</div>
		<div class="uk-child-width-expand@s uk-grid-match" uk-grid="true">
			<AuthorCard />
			<AuthorCard />	
		</div>
	</div>

);

export default ResultsGrid;