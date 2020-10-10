import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import {ProductCard} from '../components/ProductCard';

export class ListPage extends PureComponent {
    render() {
        const {products, onAddToCart} = this.props;

        return (
            <Grid container spacing={4}>
                {products.map((product, index) =>
                    <Grid item xs={12} key={product.id}>
                        <ProductCard product={product}
                            productIndex={index}
                            cartAction={{
                                text: 'Add to cart',
                                color: 'primary',
                                handler: onAddToCart,
                            }}
                        />
                    </Grid>
                )}
            </Grid>
        );
    }
}

ListPage.propTypes = {products: PropTypes.arrayOf(PropTypes.object), onAddToCart: PropTypes.func};

export default ListPage;
