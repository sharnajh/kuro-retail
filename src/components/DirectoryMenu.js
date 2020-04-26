import React from "react";
import MenuItem from "./MenuItem";

const DirectoryMenu = () => {
    return (
        <div className="directory-menu">
            <div className="directory-row">
                <MenuItem title="hats" />
                <MenuItem title="jackets" />
                <MenuItem title="sneakers" />
            </div>
            <div className="directory-row">
                <MenuItem title="womens" />
                <MenuItem title="mens" />
            </div>
        </div>
    )
}

export default DirectoryMenu;