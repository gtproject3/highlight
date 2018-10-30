import React from "react";
import "./SearchPanel.css";

// :TODO: props needs to be passed in somewhere, along with proper routes

class SearchPanel extends React.Component {
    state = {
        //search query entered by user
        race: "",
        results: [],
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state.race);

        // imdbAPI.searchMovie(this.state.sq).then(res => {
        //     console.log("RES", res);

        this.setState({
            race: res.results.imdbid,
            results: res.results
        }, () => console.log(this.state));
        // });
    }

    render() {
        return (

            <div className="uk-container searchContainer blueBody">
                <p className="uk-text-center"><span className="redText" uk-icon="bolt"></span></p>
                <h3 className="searchContainerTitle uk-text-center">look up an author:</h3>

                <div className="uk-width-1-2@s uk-align-center">
                    <form className="uk-width-1-1 uk-form-stacked">
                        <fieldset className="uk-fieldset">

                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="searchDiversity">Author Diversity</label>
                                <select className="uk-select" id="selectRace">
                                    <select value={this.state.value} onChange={this.handleChange}></select>
                                    <option className="default">Select author race...</option>
                                    <option>Asian</option>
                                    <option>Black</option>
                                    <option>Hispanic</option>
                                    <option>Multiracial</option>
                                    <option>Native American</option>
                                    <option>Pacific Islander</option>
                                    <option>White</option>
                                </select>
                            </div>
                            <button className="uk-button uk-button-primary uk-align-center" onClick={this.handleSubmit}>look up</button>

                        </fieldset>
                    </form>

                </div>

            </div>
        )
    }


}
export default SearchPanel;