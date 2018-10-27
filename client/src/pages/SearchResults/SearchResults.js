import react from 'React';
import './SearchResults.css';
import GlobalNav from '../../components/GlobalNav';
import GlobalFooter from '../../components/GlobalFooter';
import ResultsGrid from '../../components/ResultsGrid';

// there's probably a better way to do this- with a for loop
// each ResultsGrid contsains 4 AuthorCards

const SearchResults = props => (

	<div>
		<GlobalNav />
		<div class="uk-container searchResults">

			<h1 class="whitishText searchContainerTitle uk-text-center resultsCount">5 results</h1>
			<h6 class="uk-width-expand lightGreyText" uk-leader="fill: ∆"> </h6>
			<ResultsGrid />
			
		</div>
		<GlobalFooter />
	</div>

);

export default SearchResults;