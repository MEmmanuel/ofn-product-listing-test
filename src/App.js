import React from 'react';
import './App.css';
import { AppBar } from './components/AppBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
    mixins: {
        toolbar: {
            minHeight: 86,
            backgroundColor: 'white',
            color: '#5C5C5C'
        }
    },
});


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AppBar />
            </ThemeProvider>
        </div>
    );
}

export default App;
