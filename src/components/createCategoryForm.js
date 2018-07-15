import React, { Component } from 'react';

class CreateCategoryForm extends Component {
    nameRef = React.createRef();

    createCategory = e => {
        e.preventDefault();
        const category = this.nameRef.current.value;
        this.props.addCategory(category);
    }

    render() {
        return (
            <form className='createCategory' onSubmit={this.createCategory}>
                <input type="text" name='name' ref={this.nameRef} placeholder='Category' />
                <button type='submit'>Create Category</button>
            </form>
        )
    }
}

export default CreateCategoryForm;