import styled  from 'styled-components'
import Button from "@material-ui/core/Button";

export const StyledButton = styled(Button).attrs(({bold, uppercase, backgroundColor}) => {console.log('button', bold, uppercase);return ({
    bold: bold,
    uppercase: uppercase !== false,  // default is uppercase
    backgroundColor: backgroundColor,
})})`
    font-weight: ${props => props.bold};
    text-transform: ${props => props.uppercase ? "uppercase" : "unset"};
    background-color: ${props => props.backgroundColor};
`;

export default StyledButton;
