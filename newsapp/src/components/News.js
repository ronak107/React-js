import React, { Component } from "react";
import Newsiteam from "./Newsiteam";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: "6",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      artical: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=085728e13a314f85aef565032d9b02be&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      artical: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlepreClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=085728e13a314f85aef565032d9b02be&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    console.log("previous");
    this.setState({
      page: this.state.page - 1,
      artical: parsedData.articles,
      loading: false,
    });
  };

  handlenexClick = async () => {
    console.log("next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pagesize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=085728e13a314f85aef565032d9b02be&page=${
        this.state.page + 1
      }&pagesize=${this.props.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        artical: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Newsapp - Top Headline</h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.artical.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <Newsiteam
                    title={e.title ? e.title.slice(0, 45) : ""}
                    description={
                      e.description ? e.description.slice(0, 80) : ""
                    }
                    urlToImage={e.urlToImage}
                    newsurl={e.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlepreClick}
            type="submit"
          >
            &larr; previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="btn btn-dark"
            onClick={this.handlenexClick}
            type="submit"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
