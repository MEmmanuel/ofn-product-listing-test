import axios from 'axios/index';

import React, {Component} from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import { AppBar } from './components/AppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


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
                    {this.state.products.map(product => <div key={product.id}>{product.name}</div>)}
                </ThemeProvider>
            </div>
        )
    }
}

export default App;
