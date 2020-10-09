import styled  from 'styled-components'
import Chip from "@material-ui/core/Chip";

export const StyledChip = styled(Chip)`
    font-weight: ${props => props.bold};
    text-transform: ${props => props.isUppercase ? "uppercase" : "unset"};
`;

export default StyledChip;
