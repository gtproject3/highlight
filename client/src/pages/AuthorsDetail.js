import React, { Component } from "react";
import AuthorDetailNav from "../components/AuthorDetailNav"
import List from "../components/List"

class Authors extends Component {
  state = {
    author: []
  }
  componentDidMount() {
    this.loadAuthor();
  }

  loadAuthor = () => {
    API.getAuthor()
      .then(res => this.setState({ author: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    //let {author} = this.state
    return (
      <div>
        {/* author detail nav */}
        <AuthorDetailNav />

        <div>

        </div>
        {/* breadcrumbs */}
        <div className="uk-container">
          <ul className="uk-breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href="">Authors</a></li>
            <li><span>{this.state.author}</span></li>
          </ul>
        </div>

        {/* main content  */}
        <div className="uk-container uk-container-small">
          <article className="blueText uk-article">
            <h1 className="uk-article-title uk-text-center">{this.state.author.name}</h1>
            <p className="uk-text-center blueText uk-article-meta"><span className="flag-icon flag-icon-us"></span> {this.state.author.Hometown}{this.state.author.born_at}{this.state.author.died_at}</p>
            <p className="uk-text-center redText"><span uk-icon="bolt"></span></p>
            <p className="uk-dropcap">{this.state.author} {this.state.author.about}</p>
            <p className="uk-text-center"><span className="redText" uk-icon="bolt"></span></p>


            {/* works slider*/}
            <h2 className="uk-text-center">{this.state.author.works_count}</h2>
            <div uk-slider>
              <div className="uk-position-relative">
                <div className="uk-slider-container uk-light">
                  <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s">
                    {this.state.author.Book_titles.length ? (
                      this.state.author.Book_titles.map(Book_title => (
                        <List key={Book_title} title={Book_title} name={this.state.author.name} />
                      )
                      )
                    ) : (
                        <h3>No Results to Display</h3>
                      )}
                  </ul>
                </div>
                <div className="uk-visible@s">
                  <a className="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous
                    uk-slider-item="previous"></a>
                  <a className="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next
                    uk-slider-item="next"></a>
                </div>
              </div>
              <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
            {/* comments - will add in another branch  */}


          </article>
        </div>
      </div>
    )
  }
}