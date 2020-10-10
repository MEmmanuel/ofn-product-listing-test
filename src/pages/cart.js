import React, { PureComponent } from 'react';

import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import {ProductCard} from "../components/ProductCard";
import {StyledLink} from "../components/StyledLink";
import {StyledButton} from "../components/StyledButton";


const EmptyCartContainer = styled.div`
    padding-top: 53px;
`

const StyledTypography = styled(Typography)`
    padding-top: 15px;
    padding-bottom: 22px;
`

const TotalContainer = styled.div`
    padding-top: 37px;
`

const TotalTitleSpan = styled.span`
    font-weight: 700
`

const TotalSpan = styled.span`
    color: #5C5C5C;
    margin-left: 10px;
`


export class CartPage extends PureComponent {
    render() {
        const {cart, onRemoveFromCart} = this.props;
        const totalCartPrice = cart.reduce((sum, product) => sum + Number(product.price) * 100, 0) / 100;

        return (
            <div>
                <StyledLink to="/" fontSize={10}>
                    &lt; back to Products
                </StyledLink>
                <StyledTypography variant="h6">My cart</StyledTypography>
                {
                    cart.length > 0 && (
                        <div>
                            <Grid container spacing={4}>
                                {cart.map((product, index) =>
                                    <Grid item xs={12} key={index}>
                                        <ProductCard product={product}
                                                     productIndex={index}
                                                     cartAction={{
                                                         text: "Remove",
                                                         color: "primary",
                                                         backgroundColor: "#E47131",
                                                         handler: onRemoveFromCart,
                                                     }}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                            <TotalContainer>
                                <TotalTitleSpan>Total: </TotalTitleSpan>
                                <TotalSpan>€ {totalCartPrice.toFixed(2)}</TotalSpan>
                                <StyledButton color="secondary" variant="contained"
                                              bold={700} $uppercase={false} $marginLeft={20}
                                >
                                    Proceed to checkout
                                </StyledButton>
                            </TotalContainer>
                        </div>
                    )
                }
                {
                    cart.length === 0 && (
                        <EmptyCartContainer>Empty cart, no fun :(</EmptyCartContainer>
                    )
                }
            </div>
        )
    }
};

export default CartPage
