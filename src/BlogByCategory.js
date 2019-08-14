import React from "react";
import "./Blog.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Category from "./components/Category";
import Footer from "./components/Footer";
import BlogSidebar from "./components/BlogSidebar";
import BlogContent from "./components/BlogContent";
import Search from "./components/Search";

const apiKey = "9a5dcc59b8d449ebbb116d88d043689f";
const baseUrl = "https://newsapi.org/v2/everything?";

class BlogByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      search: {
        placeHolder: "search...",
        keyword: "search..."
      }
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      const self = this;
      axios
        .get(baseUrl + "sources=" + self.props.match.params.category + apiKey)
        .then(function(response) {
          self.setState({ listNews: response.data.articles.slice(0, 5) });
          console.log(response);
        });
    }
  };

  //   handleSearch = event => {
  //     this.setState({ search: { keyword: event.target.value } }, () => {
  //       this.getData(this.state.search.keyword);
  //     });
  //   };

  //   getData = keyword => {
  //     const self = this;

  //     // check apakah keyword kosong
  //     if (keyword === "") {
  //       axios
  //         .get(baseUrl + "q=indonesia" + "&apiKey=" + apiKey)
  //         .then(function(response) {
  //           self.setState({ listNews: response.data.articles.slice(0, 5) });
  //           console.log(response);
  //         })
  //         // Handle Error
  //         .catch(function(error) {
  //           console.log(error);
  //         });
  //     } else {
  //       axios
  //         .get(baseUrl + "q=" + keyword + "&apiKey=" + apiKey)
  //         .then(function(response) {
  //           self.setState({ listNews: response.data.articles.slice(0, 5) });
  //           console.log(response);
  //         })
  //         // Handle Error
  //         .catch(function(error) {
  //           console.log(error);
  //         });
  //     }
  //   };

  componentDidMount = () => {
    const self = this;
    axios
      .get(baseUrl + "q=indonesia" + "&apiKey=" + apiKey)
      .then(function(response) {
        self.setState({ listNews: response.data.articles.slice(0, 5) });
        console.log(response);
      })
      // Handle Error
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (JSON.parse(localStorage.getItem("isLogin")) === null) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <div>
          <div className="category">{/* <Category /> */}</div>
          <div className="wrapper-blog">
            <Category />
            <div className="container">
              <div className="row justify-content-center ">
                <div className="col-md-3 blog-side-bar">
                  {/* <Search
                    value={this.state.search.placeHolder}
                    onChange={this.handleSearch}
                  /> */}
                  <BlogSidebar data={this.state.listNews} />
                  {console.log(this.state.listNews)}
                </div>
                <div className="col-md-8">
                  <BlogContent data={this.state.listNews} />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default BlogByCategory;
