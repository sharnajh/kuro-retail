import React, { Component } from "react";
import "./css/Directory.css";
import MenuItem from "../menu-item/MenuItem";

class DirectoryMenu extends Component {
    state = {
        sections: [
            { title: "hats", imgUrl: "https://images.unsplash.com/photo-1525740615880-50bb88fe0b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", id: 1 },
            { title: "jackets", imgUrl: "https://images.unsplash.com/photo-1553632786-0cfb0ce7dacb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", id: 2 },
            { title: "sneakers", imgUrl: "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", id: 3 },
            { title: "womens", imgUrl: "https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", size: "large", id: 4 },
            { title: "mens", imgUrl: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", size: "large", id: 5 }
        ]
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imgUrl, id, size }) => (
                    <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
                ))}
            </div>
        )
    }
}

export default DirectoryMenu;