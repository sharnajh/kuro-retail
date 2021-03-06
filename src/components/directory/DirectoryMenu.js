import React from "react";
import "./css/Directory.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

// Components
import MenuItem from "../menu-item/MenuItem";

const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(
        ({ title, minImgUrl, bigImgUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            minImgUrl={minImgUrl}
            bigImgUrl={bigImgUrl}
            linkUrl={linkUrl}
            size={size}
          />
        )
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
