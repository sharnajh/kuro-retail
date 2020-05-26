import React, { useState } from "react";
import "./css/Collection.css";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
// Components
import CollectionItem from "../collection-item/CollectionItem";
import MainTitle from "../main-title/MainTitle";

const Collection = ({ collection: { title, items } }) => {
  const [filterOption, setFilter] = useState("");
  const filteredItems = () => {
    switch (filterOption) {
      case "":
        return items;
      case "hi-low":
        return [...items].sort((a, b) => b.price - a.price);
      case "low-hi":
        return [...items].sort((a, b) => a.price - b.price);
      case "abc":
        return [...items].sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
      default:
        return items;
    }
  };
  return (
    <div className="collection">
      <MainTitle>{title}</MainTitle>
      <div className="collection-header">
        <span className="displaying">
          Displaying 1 - {items.length} of {items.length} items
        </span>
        <form className="filter">
          <select
            className="dropdown"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="" defaultValue="">
              Filter Options
            </option>
            <option value="hi-low">Price: High to Low</option>
            <option value="low-hi">Price: Low to High</option>
            <option value="abc">Alphabetical</option>
          </select>
        </form>
      </div>

      <div className="items">
        {filteredItems().map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
