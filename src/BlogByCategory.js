import React from "react";
import "./Blog.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Category from "./components/Category";
import Footer from "./components/Footer";
import BlogSidebar from "./components/BlogSidebar";
import BlogContent from "./components/BlogContent";
import Search from "./components/Search";
import { connect } from "unistore/react";
import { actions } from "./Store";

const apiKey = "06a3f3d6fe8b44d28a0b37c3b4e3efd6";
const baseUrl = "https://newsapi.org/v2/everything?";

class BlogByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // listNews: [],
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
        .get(
          baseUrl +
            "sources=" +
            self.props.match.params.category +
            "&apiKey=" +
            apiKey
        )
        .then(function(response) {
          self.props.setListNews(response.data.articles);
          // self.setState({ listNews: response.data.articles });
          console.log(response);
        });
    }
  };

  handleSearch = event => {
    this.setState({ search: { keyword: event.target.value } }, () => {
      this.getData(this.state.search.keyword);
    });
  };

  getData = keyword => {
    const self = this;

    // check apakah keyword kosong
    if (keyword === "") {
      axios
        .get(
          baseUrl +
            "sources=" +
            self.props.match.params.category +
            "&apiKey=" +
            apiKey
        )
        .then(function(response) {
          self.props.setListNews(response.data.articles);
          // self.setState({ listNews: response.data.articles });
          console.log(response);
        })
        // Handle Error
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios
        .get(baseUrl + "q=" + keyword + "&apiKey=" + apiKey)
        .then(function(response) {
          self.props.setListNews(response.data.articles);
          // self.setState({ listNews: response.data.articles });
          console.log(response);
        })
        // Handle Error
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  componentDidMount = () => {
    const self = this;
    axios
      .get(baseUrl + "q=indonesia" + "&apiKey=" + apiKey)
      .then(function(response) {
        self.props.setListNews(response.data.articles);
        // self.setState({ listNews: response.data.articles });
        console.log(response);
      })
      // Handle Error
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (this.props.isLogin === null) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <div>
          <div className="category">{/* <Category /> */}</div>
          <div className="wrapper-blog">
            <Category data={this.state.listCategory} />
            <div className="container">
              <div className="row justify-content-center ">
                <div className="col-md-3 blog-side-bar">
                  <Search
                    value={this.state.search.placeHolder}
                    onChange={this.handleSearch}
                  />
                  <BlogSidebar data={this.props.listNews.slice(0, 5)} />
                  {console.log(this.props.listNews)}
                </div>
                <div className="col-md-8">
                  <BlogContent data={this.props.listNews.slice(15, 20)} />
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

// export default BlogByCategory;
export default connect(
  "login, nama, email, isLogin, listNews",
  actions
)(BlogByCategory);
