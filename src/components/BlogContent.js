import React from "react";
import "./BlogContent.css";
import blackHeart from "../img/heart.png";
import share from "../img/share.png";
import like from "../img/like.png";

function BlogContent() {
  return (
    <div>
      <div class="card" style={{ width: "100%" }}>
        <img
          class="card-img-top"
          src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1540808310/i0kisnjcodrxieyhik8v.jpg"
          alt="Card image cap"
        />
        <h4 className="title">
          Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan
        </h4>
        <p className="teaser-text">
          Putri Ayako dari Jepang resmi dinikahi pria dari kalangan jelata, Kei
          Moriya, pada Senin (29/10). Dengan pernikahan ini, Putri Ayako resmi
          melepaskan status keluarga kerajaan yang disandangnya.
        </p>
        <p className="update">Last updated 3 minutes ago</p>
        <table className="bottom-button text-center">
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
        </table>
      </div>
    </div>
  );
}

export default BlogContent;
