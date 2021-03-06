import axios from 'axios/index';
import styled  from 'styled-components';

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './App.css';
import { AppBar } from './components/AppBar';
import Cart from './pages/CartPage';
import List from './pages/ListPage';


const theme = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 86,
            backgroundColor: 'white',
            color: '#5C5C5C'
        },
    },
    palette: {
        primary: {
            main: '#E4B231',
            contrastText: '#fff',
        },
        secondary: {
            main: '#69A95D',
            contrastText: '#fff',
        },
    }
});


const StyledContainer = styled(Container)`
    padding-top: 37px;
    padding-bottom: 100px;
`;


class App extends Component {
    state = {
        products: [],
        cart: [],
        lastAddedProduct: null,
        lastAddedTimeout: null,
    };

    componentDidMount = () => {
        this.fetchProducts();
    }

    fetchProducts = () => {
        const path = '/data/products.json';

        return axios.get(`${process.env.PUBLIC_URL}${path}`)
            .then(response => {
                this.setState({products: response.data});
            });
    };

    handleAddToCart = (product) => {
        if (this.state.lastAddedTimeout) {
            clearTimeout(this.state.lastAddedTimeout);
        }
        const lastAddedTimeout = setTimeout(() => {
            this.setState({lastAddedProduct: null, lastAddedTimeout: null});
        }, 2000);
        this.setState({cart: [...this.state.cart, product], lastAddedProduct: product.id, lastAddedTimeout});
    };

    handleRemoveFromCart = (product, productIndex) => {
        this.setState({cart: this.state.cart.slice(0, productIndex)
            .concat(this.state.cart.slice(productIndex + 1, this.state.cart.length))});
    };

    render = () => {
        return (
            <div className="App">
                <Router>
                    <ThemeProvider theme={theme}>
                        <AppBar cartQuantity={this.state.cart.length} />
                        <StyledContainer fixed maxWidth={'md'}>
                            <Switch>
                                <Route path="/cart">
                                    <Cart cart={this.state.cart}
                                        onRemoveFromCart={this.handleRemoveFromCart}
                                    />
                                </Route>
                                <Route path="/">
                                    <List products={this.state.products}
                                        onAddToCart={this.handleAddToCart}
                                        lastAddedProduct={this.state.lastAddedProduct}
                                    />
                                </Route>
                            </Switch>
                        </StyledContainer>
                    </ThemeProvider>
                </Router>
            </div>
        );
    }
}

export default App;
