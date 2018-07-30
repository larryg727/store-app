import React, { Component } from 'react';

class ProductForm extends Component {
    state = {
        isCategorySelected: false,
        categorySelected: ''
    };
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    priceRef = React.createRef();
    detailsRef = React.createRef();
    categoryRef = React.createRef();
    subcategoryRef = React.createRef();

    createProduct = e => {
        e.preventDefault();
        const product = {
            name: this.nameRef.current.value,
            description: this.descriptionRef.current.value,
            details: this.detailsRef.current.value,
            price: this.priceRef.current.value,
            category: this.categoryRef.current.value,
            subcategory: this.state.categorySelected ? this.subcategoryRef.current.value : null
        };
        this.props.addProduct(product);
        e.currentTarget.reset();
    };

    selectedCategory = () => {
        this.setState({
            isCategorySelected: true,
            categorySelected: this.categoryRef.current.value
        });
    };

    selectedSubcategories = category => this.props.subcategories.filter(subcategory => subcategory.category_id === parseInt(category, 10));

    render() {
        return (
            <div className="modalBackground">
                <form className="addProduct" onSubmit={this.createProduct}>
                    <div className="modalCloseBtn" onClick={this.props.hideForm}>
                        X
                    </div>
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                    <input name="description" ref={this.descriptionRef} type="text" placeholder="Description" />
                    <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                    <textarea name="details" ref={this.detailsRef} rows="5" colums="35" placeholder="Details" />
                    <select name="category" ref={this.categoryRef} onChange={this.selectedCategory}>
                        <option value={null}>Select an option</option>
                        {this.props.categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {this.state.isCategorySelected ? (
                        <select name="subcategory" ref={this.subcategoryRef}>
                            <option value={null}>Select an option</option>
                            {this.selectedSubcategories(this.state.categorySelected).map(subcategory => (
                                <option key={subcategory.id} value={subcategory.id}>
                                    {subcategory.name}
                                </option>
                            ))}
                        </select>
                    ) : null}
                    <button type="submit">Add Product</button>
                </form>
            </div>
        );
    }
}

export default ProductForm;
