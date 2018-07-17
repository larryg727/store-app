import React, { Component } from 'react';

class Dropdown extends Component {

    link = (category) => ('/products/' + category)
    
    render() {
        const { id, name } = this.props.category
        return (    
                <li id={id}><a className='nav-btn' href={this.link(id)}>{name}</a></li>
        )
    }
}

export default Dropdown;