import React, {Component} from 'react';
import './post-status-filter.css';
import {Button} from "reactstrap";

export default class PostStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'all'},
        {name: 'like', label: 'like'},
    ];

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const color = active ? 'info':'outline-secondary';
           return  (
               <Button
                   key={name}
                   type="button"
                   color={color}
                   onClick={() => {
                       this.props.onFilterSelect(name);
                   }}
               >{label}</Button>
           )

        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
};
