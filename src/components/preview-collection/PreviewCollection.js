import React from "react";
import "./css/PreviewCollection.css";
import CollectionItem from "../collection-item/CollectionItem";

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="preview-collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, i) => i < 4)
                    .map(({ id, ...otherProps }) => (
                        <CollectionItem key={id} {...otherProps} />
                ))}
            </div>
        </div>
    )
}

export default PreviewCollection;