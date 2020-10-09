import axios from 'axios/index';
import styled  from 'styled-components'

import React, {Component} from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

import './App.css';
import { AppBar } from './components/AppBar';
import { ProductCard } from './components/ProductCard';


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

    render = () => {
        return (
            <div className="App">
                <ThemeProvider theme={theme}>
                    <AppBar />
                    <StyledContainer fixed maxWidth={"md"}>
                        <Grid container spacing={4}>
                            {this.state.products.map(product =>
                                <Grid item xs={12}>
                                    <ProductCard key={product.id} product={product}></ProductCard>
                                </Grid>
                            )}
                        </Grid>
                    </StyledContainer>
                </ThemeProvider>
            </div>
        )
    }
}

export default App;
