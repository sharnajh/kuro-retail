import React from "react";
import "./css/PreviewCollection.css";
import CollectionItem from "../collection-item/CollectionItem";

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="preview-collection">
            <div className="preview-header">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">View entire collection</h2>
            </div>
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