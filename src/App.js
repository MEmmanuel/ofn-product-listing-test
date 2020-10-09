import axios from 'axios/index';
import styled  from 'styled-components'

import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

import './App.css';
import { AppBar } from './components/AppBar';
import { ProductCard } from './components/ProductCard';
import { StyledLink } from './components/StyledLink';


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
`


class App extends Component {
    state = {
        products: [],
        cart: [],
    };

    componentDidMount = () => {
        this.fetchProducts();
    }

    fetchProducts = () => {
        const path = '/data/products.json';

        return axios.get(`${process.env.PUBLIC_URL}${path}`)
            .then(response => {
                this.setState({products: response.data});
            })
    };

    handleAddToCart = product => {
        this.setState({cart: [...this.state.cart, product]})
    };

    render = () => {
        return (
            <div className="App">
                <Router>
                    <ThemeProvider theme={theme}>
                        <AppBar cartQuantity={this.state.cart.length} />
                        <StyledContainer fixed maxWidth={"md"}>
                            <Switch>
                                <Route path="/cart">
                                    <h1>This is your cart</h1>
                                    <StyledLink to="/">
                                        Back to list
                                    </StyledLink>
                                </Route>
                                <Route path="/">
                                    <Grid container spacing={4}>
                                        {this.state.products.map(product =>
                                            <Grid item xs={12} key={product.id}>
                                                <ProductCard product={product} onAddToCart={this.handleAddToCart}></ProductCard>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Route>
                            </Switch>
                        </StyledContainer>
                    </ThemeProvider>
                </Router>
            </div>
        )
    }
}

export default App;
