import styled  from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button).attrs(({bold, $uppercase, $backgroundColor,
    $marginTop, $marginRight, $marginBottom, $marginLeft}) => ({
    bold: bold,
    $uppercase: $uppercase !== false,  // default is uppercase
    $backgroundColor: $backgroundColor,
    $marginTop: $marginTop || 0,
    $marginRight: $marginRight || 0,
    $marginBottom: $marginBottom || 0,
    $marginLeft: $marginLeft || 0,
}))`
    font-weight: ${props => props.bold};
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'unset'};
    background-color: ${props => props.backgroundColor};
    margin-top: ${props => props.$marginTop}px;
    margin-right: ${props => props.$marginRight}px;
    margin-bottom: ${props => props.$marginBottom}px;
    margin-left: ${props => props.$marginLeft}px;
`;

export default StyledButton;
