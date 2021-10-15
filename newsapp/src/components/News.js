import React, { Component } from "react";
import Newsiteam from "./Newsiteam";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
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
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      artical: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = ` ${this.capitalizeFirstLetter(
      this.props.category
    )}-Newsapp`;
  }
  async update() {
    this.props.setprogress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ec2275ce9d5439dbd6223d33fba8663&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      artical: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setprogress(100);
  }

  async componentDidMount() {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=085728e13a314f85aef565032d9b02be&page=1&pagesize=${this.props.pagesize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     artical: parsedData.articles,
    //     totalResults: parsedData.totalResults,
    //     loading: false,
    //   });
    this.update();
  }

  handlepreClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=085728e13a314f85aef565032d9b02be&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pagesize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // console.log("previous");
    // this.setState({
    //   page: this.state.page - 1,
    //   artical: parsedData.articles,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.update();
  };

  handlenexClick = async () => {
    // console.log("next");
    // if (
    //   this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.props.pagesize)
    // ) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=085728e13a314f85aef565032d9b02be&page=${
    //     this.state.page + 1
    //   }&pagesize=${this.props.pagesize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     artical: parsedData.articles,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.update();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ec2275ce9d5439dbd6223d33fba8663&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      artical: this.state.artical.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          <span className="badge bg-warning text-dark">
            Newsapp - Top Headline on{" "}
            {this.capitalizeFirstLetter(this.props.category)} category
          </span>
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.artical.length}
          next={this.fetchMoreData}
          hasMore={this.state.artical.length !== this.state.totalResults}
          loader={
            <h4>
              {" "}
              <Spinner />
            </h4>
          }
        >
          <div className="container">
            <div className="row">
              {
                // !this.state.loading &&
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
                        author={e.author}
                        date={e.publishedAt}
                        Info={e.source.name}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
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
        </div> */}
      </div>
    );
  }
}

export default News;
