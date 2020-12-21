import React from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './App.css';
import styled from 'styled-components';

const AppBlock = styled.div`
      margin: 0 auto;
      max-width: 800px;
`;

const App = () => {

    const data = [
        {label: 'Going to learn ReactJS', important: true, id: 1},
        {label: 'That is so good', important: false, id: 2},
        {label: 'I need a break', important: false, id: 3},
    ];

    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
};

export default App;
