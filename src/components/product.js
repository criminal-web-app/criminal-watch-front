import React, {Component} from 'react';




function SearchBar(props){
    return (
        <form>
            <input type='text'/>
            <input type='checkbox' />
        </form>
    )
}



class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.products = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ];
        
        this.state = {
            filterText : '',
            inStockOnly : false
        }
        this.searchProduct = this.searchProduct.bind(this);
    }

    searchProduct(e){
        this.setState({
            filterText : e.target.value
        })
    }
}


export default ProductTable;