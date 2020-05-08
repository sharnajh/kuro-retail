import React from "react";
import "./css/Collection.css";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
// Components
import CollectionItem from "../collection-item/CollectionItem";
import MainTitle from "../main-title/MainTitle";

const Collection = ({ collection: { title, items } }) => {
    return (
        <div className="collection">
            <MainTitle>{title}</MainTitle>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);