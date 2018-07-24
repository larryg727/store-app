import React, { Component } from 'react';

class CreateSubcategoryForm extends Component {
    nameRef = React.createRef();
    categoryRef = React.createRef();

    createSubcategory = e => {
        e.preventDefault();
        const subcategory = {
            name: this.nameRef.current.value,
            category: this.categoryRef.current.value
        };

        this.props.addSubcategory(subcategory);
    };

    render() {
        return (
            <form className="createSubcategory" onSubmit={this.createSubcategory}>
                <input type="text" name="name" ref={this.nameRef} placeholder="Subcategory" />
                <select name="category" ref={this.categoryRef}>
                    <option value="">Select an option</option>
                    {this.props.categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Create Category</button>
            </form>
        );
    }
}

export default CreateSubcategoryForm;
