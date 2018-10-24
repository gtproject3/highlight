import React, { Component } from "react";
import AuthorDetailNav from "../components/AuthorDetailNav"


class Authors extends Component {
  state = {
    author: []
  }
  componentDidMount() {
    this.loadAuthor();
  }
}

loadAuthor = () => {
  API.getAuthor()
    .then(res => this.setState({ author: res.data }))
    .catch(err => console.log(err));
};

render() {
  return (
    <div>
      //author detail nav 


      //breadcrumbs 
      <div class="uk-container">
        <ul class="uk-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="">Authors</a></li>
          <li><span>{this.state.author}</span></li>
        </ul>
      </div>

      //main content 
      <div class="uk-container uk-container-small">
        <article class="blueText uk-article">
          <h1 class="uk-article-title uk-text-center">{this.state.author}</h1>
          <p class="uk-text-center blueText uk-article-meta"><span class="flag-icon flag-icon-us"></span> {this.state.hometown}{this.state.born_at}{this.state.died_at}</p>
          <p class="uk-text-center redText"><span uk-icon="bolt"></span></p>
          <p class="uk-dropcap">{this.state.author} {this.state.about}</p>
          <p class="uk-text-center"><span class="redText" uk-icon="bolt"></span></p>



        </article>
      </div>
    </div>
  )

}