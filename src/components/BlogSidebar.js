import React from "react";
import "./BlogSidebar.css";
import axios from "axios";

class BlogSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: []
    };
  }

  componentDidMount = () => {
    const apiKey = "fc103a4f703e409e8dc8504d5d61b3b5";
    const baseUrl = "https://newsapi.org/v2/";
    const urlEverything =
      baseUrl + "everything?" + "q=indonesia&" + "apiKey=" + apiKey;
    const self = this;
    axios
      .get(urlEverything)
      // Handle success
      .then(function(response) {
        self.setState({ listNews: response.data.articles });
        console.log(response);
      })
      // Handle Error
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    console.log(this.state.listNews);
    return (
      <div>
        <div className="card" style={{ width: "100%" }}>
          <div className="wrapper-side-bar ">
            <span className="side-bar-header">BERITA TERKINI</span>
            <span>
              <a href="#">lihat semua</a>
            </span>
          </div>
        </div>
        {/* dislice agar hanya memunculkan data 1-5 */}
        {this.state.listNews.slice(0, 5).map((item, key) => {
          return (
            <div className="card" style={{ width: "100%" }}>
              <div className="wrapper-side-bar ">
                <span className="side-bar-content">
                  <div className="square text-center">
                    <span className="number ">#{key + 1}</span>
                  </div>
                  <br />
                  <a href={item.url}>
                    <div className="side-bar-title">{item.title}</div>
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BlogSidebar;
