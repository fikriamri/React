import React from "react";
import "./BlogContent.css";
import blackHeart from "../img/heart.png";
import share from "../img/share.png";
import like from "../img/like.png";

function BlogContent(props) {
  {
    console.log(props.data);
  }
  return (
    <div>
      {/* dislice agar hanya memunculkan data 1-5 */}
      {props.data.map(item => {
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
            <p className="source">source: {item.source.name}</p>
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

export default BlogContent;
