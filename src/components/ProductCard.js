import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled  from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import {StyledButton} from './StyledButton';
import {StyledChip} from './StyledChip';


const StyledCardContent = styled(CardContent)`
    height: calc(100% - 24px)
`;

const StyledGridContainer = styled(Grid)`
    height: 100%
`;

const StyledCard = styled(Card)`
    box-shadow: 0px 0px 4px 0px #000000;
    min-height: 119px;
`;

const PictureContainer = styled.div`
    width: 50px;
`;

const ActionsContainer = styled.div`
    height: 100%
`;

const ActionsGridContainer = styled(Grid)`
    height: 100%
`;

const GrowGrid = styled(Grid)`
    flex: 1;
`;

const UnitSpan = styled.span`
    font-size: 10px;
    color: #5C5C5C;
    margin-left: 10px;
`;

const DescriptionDiv = styled.div`
    font-size: 12px;
    color: #5C5C5C;
    margin-top: 16px;
    margin-bottom: 16px;
`;

const PriceTitleSpan = styled.span`
    font-size: 12px;
`;

const PriceSpan = styled.span`
    font-size: 12px;
    color: #5C5C5C;
    margin-left: 10px;
`;

const AddedToCartSpan = styled.span`
    position: relative;
    font-size: 12px;
    color: #69A95D;
    display: block;
    left: -90px;
    top: 26px;
`;


export class ProductCard extends PureComponent {
    handleCartAction = () => {
        this.props.cartAction.handler(this.props.product, this.props.productIndex);
    }

    render() {
        const { product, cartAction, hasBeenAdded } = this.props;

        return (
            <StyledCard>
                <StyledCardContent>
                    <StyledGridContainer container direction="row" spacing={2}>
                        <Grid item>
                            <PictureContainer>
                                <img src={process.env.PUBLIC_URL + `/images/${product.permalink}.png`}
                                    alt={product.images.alt} />
                            </PictureContainer>
                        </Grid>
                        <GrowGrid item>
                            <div>
                                <span>{product.name}</span>
                                <UnitSpan>{product.unit_to_display}</UnitSpan>
                            </div>
                            <DescriptionDiv>{product.description}</DescriptionDiv>
                            <div>
                                <PriceTitleSpan>Price</PriceTitleSpan>
                                <PriceSpan>€ {Number(product.price).toFixed(2)}</PriceSpan>
                            </div>
                        </GrowGrid>
                        <Grid item>
                            <ActionsContainer>
                                <ActionsGridContainer container direction="column" justify="space-between" alignItems="flex-end">
                                    <Grid item>
                                        <StyledChip label={product.taxon.name}
                                            size="small" color="secondary"
                                            bold={700} $uppercase />
                                    </Grid>
                                    <Grid item>
                                        {hasBeenAdded && (
                                            <AddedToCartSpan>
                                                Added to cart!
                                            </AddedToCartSpan>
                                        )}
                                        <StyledButton color={cartAction.color} variant="contained"
                                            bold={700} $uppercase={false}
                                            $backgroundColor={cartAction.backgroundColor}
                                            onClick={this.handleCartAction}
                                        >
                                            {cartAction.text}
                                        </StyledButton>
                                    </Grid>
                                </ActionsGridContainer>
                            </ActionsContainer>
                        </Grid>
                    </StyledGridContainer>
                </StyledCardContent>
            </StyledCard>
        );
    }
}

ProductCard.propTypes = {
    cartAction: PropTypes.shape({
        handler: PropTypes.func,
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        text: PropTypes.string,
    }),
    product: PropTypes.object,
    productIndex: PropTypes.number,
    onAddToCart: PropTypes.func,
    hasBeenAdded: PropTypes.bool,
};

export default styled(ProductCard);
