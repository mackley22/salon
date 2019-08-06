import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import productImage from './img/product2.jpg';


class Services extends Component {
    render () {
        return(
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="main-grid">
                    <Cell col={12}>
                        <div className="service-img"><h4>All shades are the same price. Choose the perfect one for you.</h4>
                        <img src={productImage} alt="productImage"  className="product-img"/>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Services;