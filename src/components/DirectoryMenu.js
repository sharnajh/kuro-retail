import React from "react";
import MenuItem from "./MenuItem";

const DirectoryMenu = () => {
    return (
        <div className="directory-menu">
            <MenuItem title="hats" />
            <MenuItem title="jackets" />
            <MenuItem title="sneakers" />
            <MenuItem title="womens" />
            <MenuItem title="mens" />
        </div>
    )
}

export default DirectoryMenu;