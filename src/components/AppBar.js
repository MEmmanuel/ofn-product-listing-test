import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled  from 'styled-components';

import Toolbar from '@material-ui/core/Toolbar';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import { default as MUIAppBar } from '@material-ui/core/AppBar';

import { StyledLink } from './StyledLink';
import StyledButton from './StyledButton';


const FlexToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;
const FlexDiv = styled.div`
    display: flex;
`;
const MarginImg = styled.img`
    margin-right: 15px;
`;
const StyledTypography = styled(Typography)`
    max-width: 150px;
    line-height: 1.2;
`;


export class AppBar extends PureComponent {
    render() {
        const { cartQuantity } = this.props;

        return (
            <MUIAppBar position="static">
                <FlexToolbar>
                    <FlexDiv>
                        <MarginImg src={process.env.PUBLIC_URL + '/images/OFN_logo.svg'} alt="Open Food Network Logo" />
                        <StyledTypography variant="h6">
                            Open Food Network
                        </StyledTypography>
                    </FlexDiv>
                    <StyledButton color="inherit" $uppercase={false}>
                        <ShoppingCart />
                        <StyledLink to="/cart" color="inherit">
                            <span>
                                My cart
                                {cartQuantity > 0 && <span>&nbsp;({cartQuantity})</span>}
                            </span>
                        </StyledLink>
                    </StyledButton>
                </FlexToolbar>
            </MUIAppBar>
        );
    }
}

AppBar.propTypes = {cartQuantity: PropTypes.number};

export default AppBar;
