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

const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            minImgUrl: minhatsImg,
            bigImgUrl: hatsImg,
            size: "reg",
            id: 1,
            linkUrl: "shop/hats"
        },
        {
            title: "jackets",
            minImgUrl: minjacketsImg,
            bigImgUrl: jacketsImg,
            size: "reg",
            id: 2,
            linkUrl: "shop/jackets"
        },
        {
            title: "sneakers",
            minImgUrl: minshoesImg,
            bigImgUrl: shoesImg,
            size: "reg",
            id: 3,
            linkUrl: "shop/sneakers"
        },
        {
            title: "womens",
            minImgUrl: minwomensImg,
            bigImgUrl: womensImg,
            size: "large",
            id: 4,
            linkUrl: "shop/womens"
        },
        {
            title: "mens",
            minImgUrl: minmensImg,
            bigImgUrl: mensImg,
            size: "large",
            id: 5,
            linkUrl: "shop/mens"
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;