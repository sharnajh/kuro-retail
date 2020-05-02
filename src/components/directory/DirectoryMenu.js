import React, { Component } from "react";
import "./css/Directory.css";
import MenuItem from "../menu-item/MenuItem";
// Assets
// big images
import hatsImg from "./images/hats.jpeg";
import jacketsImg from "./images/jackets.jpeg";
import shoesImg from "./images/shoes.jpeg";
import womensImg from "./images/womens.jpeg";
import mensImg from "./images/mens.jpeg";
// minified images
import minhatsImg from "./images/compressed/hats-min.jpg";
import minjacketsImg from "./images/compressed/jackets-min.jpg";
import minshoesImg from "./images/compressed/shoes-min.jpg";
import minwomensImg from "./images/compressed/womens-min.jpg";
import minmensImg from "./images/compressed/mens-min.jpg";

class DirectoryMenu extends Component {
  state = {
    sections: [
      {
        title: "hats",
        minImgUrl: minhatsImg,
        bigImgUrl: hatsImg,
        size: "reg",
        id: 1,
      },
      {
        title: "jackets",
        minImgUrl: minjacketsImg,
        bigImgUrl: jacketsImg,
        size: "reg",
        id: 2,
      },
      {
        title: "sneakers",
        minImgUrl: minshoesImg,
        bigImgUrl: shoesImg,
        size: "reg",
        id: 3,
      },
      {
        title: "womens",
        minImgUrl: minwomensImg,
        bigImgUrl: womensImg,
        size: "large",
        id: 4,
      },
      {
        title: "mens",
        minImgUrl: minmensImg,
        bigImgUrl: mensImg,
        size: "large",
        id: 5,
      },
    ],
  };
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(
          ({ title, minImgUrl, bigImgUrl, id, size }) => (
            <MenuItem
              key={id}
              title={title}
              minImgUrl={minImgUrl}
              bigImgUrl={bigImgUrl}
              size={size}
            />
          )
        )}
      </div>
    );
  }
}

export default DirectoryMenu;
