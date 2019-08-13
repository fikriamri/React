import React from "react";
import "./BlogContent.css";
import blackHeart from "../img/heart.png";
import share from "../img/share.png";
import like from "../img/like.png";
import axios from "axios";

const apiKey = "fc103a4f703e409e8dc8504d5d61b3b5";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline =
  baseUrl + "top-headlines?" + "country=id&" + "apiKey=" + apiKey;

class BlogContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get(urlHeadline)
      // Handle success
      .then(function(response) {
        self.setState({ listNews: response.data.articles });
        console.log(response);
      })
      // Handle Error
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {/* dislice agar hanya memunculkan data 1-5 */}
        {this.state.listNews.slice(0, 5).map(item => {
          return (
            <div className="card content" style={{ width: "100%" }}>
              <img
                className="card-img-top"
                src={item.urlToImage}
                alt="Card image cap"
              />
              <a href={item.url}>
                <h4 className="title">{item.title}</h4>
              </a>
              <p className="teaser-text">{item.description}</p>
              <p className="update">
                published at: {item.publishedAt.slice(0, 10)}
              </p>
              <table className="bottom-button text-center">
                <tbody>
                  <tr>
                    <td>
                      <a href="#">
                        <img src={blackHeart} width="20px" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <img src={share} width="20px" />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        {" "}
                        <img src={like} width="20px" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BlogContent;
