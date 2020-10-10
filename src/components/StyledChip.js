import styled  from 'styled-components'
import Chip from "@material-ui/core/Chip";

export const StyledChip = styled(Chip).attrs(({bold, uppercase}) => ({
    bold: bold,
    uppercase: uppercase === true,  // default is lowercase
}))`
    font-weight: ${props => props.bold};
    text-transform: ${props => props.uppercase ? "uppercase" : "unset"};
`;

export default StyledChip;
