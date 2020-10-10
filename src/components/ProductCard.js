import styled  from 'styled-components'
import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {StyledButton} from "./StyledButton";
import {StyledChip} from "./StyledChip";


const StyledCardContent = styled(CardContent)`
    height: calc(100% - 24px)
`;

const StyledGridContainer = styled(Grid)`
    height: 100%
`;

const StyledCard = styled(Card)`
    box-shadow: 0px 0px 4px 0px #000000;
    height: 119px;
`

const PictureContainer = styled.div`
    width: 50px;
`

const ActionsContainer = styled.div`
    height: 100%
`

const ActionsGridContainer = styled(Grid)`
    height: 100%
`

const GrowGrid = styled(Grid)`
    flex-grow: 1;
`


export class ProductCard extends PureComponent {
    handleCartAction = () => {
        this.props.cartAction.handler(this.props.product, this.props.productIndex);
    }

    render() {
        const { product, cartAction } = this.props;

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
                            {product.name}
                        </GrowGrid>
                        <Grid item>
                            <ActionsContainer>
                                <ActionsGridContainer container direction="column" justify="space-between" alignItems="flex-end">
                                    <Grid item>
                                        <StyledChip label={product.taxon.name}
                                                    size="small" color="secondary"
                                                    bold={700} uppercase />
                                    </Grid>
                                    <Grid item>
                                        <StyledButton color={cartAction.color} variant="contained"
                                                      bold={700} uppercase={false}
                                                      backgroundColor={cartAction.backgroundColor}
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
        )
    }
}

export default styled(ProductCard)
