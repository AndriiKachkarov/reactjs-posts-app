import React from 'react';
import PostListItem from "../post-list-item/post-list-item";
import './post-list.css';
import {ListGroup} from "reactstrap/es";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item;

        return (
            <li key={item.id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    onDelete={() => onDelete(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
};

export default PostList;
