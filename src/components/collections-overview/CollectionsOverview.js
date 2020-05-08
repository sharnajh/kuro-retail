import React from "react";
import { connect } from "react-redux";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";
// Components
import MainTitle from "../../components/main-title/MainTitle";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            <MainTitle>Collections</MainTitle>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    collections: selectShopCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);