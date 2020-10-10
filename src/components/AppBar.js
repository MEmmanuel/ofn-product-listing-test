import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import { default as MUIAppBar } from '@material-ui/core/AppBar';

import { StyledLink } from './StyledLink';
import StyledButton from './StyledButton';

export class AppBar extends PureComponent {
    render() {
        const { cartQuantity } = this.props;

        return (
            <MUIAppBar position="static">
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/OFN_logo.svg'} alt="Open Food Network Logo" />
                        <Typography variant="h5">
                            Open Food Network
                        </Typography>
                    </div>
                    <StyledButton color="inherit" $uppercase={false}>
                        <ShoppingCart />
                        <StyledLink to="/cart" color="inherit">
                            <span>
                                My cart
                                {cartQuantity > 0 && <span>&nbsp;({cartQuantity})</span>}
                            </span>
                        </StyledLink>
                    </StyledButton>
                </Toolbar>
            </MUIAppBar>
        );
    }
}

AppBar.propTypes = {cartQuantity: PropTypes.number};

export default AppBar;
