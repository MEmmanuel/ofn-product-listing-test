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
import Typography from "@material-ui/core/Typography";


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

const EmptyCartContainer = styled.div`
    padding-top: 53px;
`

const StyledTypography = styled(Typography)`
    padding-top: 15px;
    padding-bottom: 22px;
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
                this.setState({products: response.data, cart: [response.data[0]]})
            })
    };

    handleAddToCart = (product, productIndex) => {
        this.setState({cart: [...this.state.cart, product]})
    };

    handleRemoveFromCart = (product, productIndex) => {
        this.setState({cart: this.state.cart.slice(0, productIndex)
                .concat(this.state.cart.slice(productIndex + 1, this.state.cart.length))})
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
                                    <StyledLink to="/" fontSize={10}>
                                        &lt; back to Products
                                    </StyledLink>
                                    <StyledTypography variant="h6">My cart</StyledTypography>
                                    {
                                        this.state.cart.length > 0 && (
                                            <Grid container spacing={4}>
                                                {this.state.cart.map((product, index) =>
                                                    <Grid item xs={12} key={index}>
                                                        <ProductCard product={product}
                                                                     productIndex={index}
                                                                     cartAction={{
                                                                         text: "Remove",
                                                                         color: "primary",
                                                                         backgroundColor: "#E47131",
                                                                         handler: this.handleRemoveFromCart,
                                                                     }}
                                                        />
                                                    </Grid>
                                                )}
                                            </Grid>
                                        )
                                    }
                                    {
                                        this.state.cart.length === 0 && (
                                            <EmptyCartContainer>Empty cart, no fun :(</EmptyCartContainer>
                                        )
                                    }
                                </Route>
                                <Route path="/">
                                    <Grid container spacing={4}>
                                        {this.state.products.map((product, index) =>
                                            <Grid item xs={12} key={product.id}>
                                                <ProductCard product={product}
                                                             productIndex={index}
                                                             cartAction={{
                                                                 text: "Add to cart",
                                                                 color: "primary",
                                                                 handler: this.handleAddToCart,
                                                             }}
                                                />
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
