import styled  from 'styled-components'
import Button from "@material-ui/core/Button";

export const StyledButton = styled(Button)`
    font-weight: ${props => props.bold};
    text-transform: ${props => props.isUppercase ? "uppercase" : "unset"};
`;

export default StyledButton;
