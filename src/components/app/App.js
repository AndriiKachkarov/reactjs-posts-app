import React, {Component} from 'react';
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

export default class App extends Component {

    state = {
        data: [
            {label: 'Going to learn ReactJS', important: true, like: false, id: 1},
            {label: 'That is so good', important: false, like: false, id: 2},
            {label: 'I need a break', important: false, like: false, id: 3},
        ]
    };
    maxId = 4;



    deleteItem = (id) => {
        this.setState(({data}) => {
           const idx = data.findIndex(elem => elem.id = id);
           return {
               data: [...data.slice(0, idx), ...data.slice(idx + 1)]
           }
        });
    };

    AddItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };
        this.setState(({data}) => ({data: [...data, newItem]}));
    };

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const idx = data.findIndex(item => item.id === id);

            const old = data[idx];
            const newItem = {...old, important: !old.important};

            return {data: [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]}
        })
    };

    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const idx = data.findIndex(item => item.id === id);

            const old = data[idx];
            const newItem = {...old, like: !old.like};

            return {data: [...data.slice(0, idx), newItem, ...data.slice(idx + 1)]}
        })
    };

    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={id => this.deleteItem(id)}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.AddItem}
                />
            </AppBlock>
        )
    }

};

