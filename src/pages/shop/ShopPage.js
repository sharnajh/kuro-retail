import React, { useState } from "react";
import "./css/Shop.css";
import { SHOP_DATA } from "./utils/data";
//Components
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

const ShopPage = () => {
    const [collections] = useState(SHOP_DATA);
    console.log(collections)
    return (
        <div className="shop-page">
            <h1 className="main-title">Collections</h1>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default ShopPage;