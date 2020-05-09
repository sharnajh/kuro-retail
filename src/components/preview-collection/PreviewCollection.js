import React from "react";
import "./css/PreviewCollection.css";
import { Link, withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem";

const PreviewCollection = ({ match, title, routeName, items }) => {
  return (
    <div className="preview-collection">
      <div className="preview-header">
        <h1 className="title">{title}</h1>
        <Link to={`${match.path}/${routeName}`}>
          <h2 className="subtitle">View entire collection</h2>
        </Link>
      </div>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
