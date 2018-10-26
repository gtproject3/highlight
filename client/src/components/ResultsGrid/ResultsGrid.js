import react from 'React';
import './ResultsGrid.css';
import AuthorCard from '../AuthorCard';

const ResultsGrid = props => (

	<div class="uk-container searchResults">

		<h1 class="whitishText searchContainerTitle uk-text-center resultsCount">5 results</h1>
		<h6 class="uk-width-expand lightGreyText" uk-leader="fill: ∆"> </h6>
		
		<div class="uk-child-width-expand@m uk-grid-match" uk-grid="true">
			<AuthorCard />
			<AuthorCard />			
		</div>
		<div class="uk-child-width-expand@m uk-grid-match" uk-grid="true">
			<AuthorCard />
			<AuthorCard />			
		</div>

	</div>
	
);

export default ResultsGrid;