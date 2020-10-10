import PropTypes from 'prop-types';
import styled  from 'styled-components';

import Chip from '@material-ui/core/Chip';

export const StyledChip = styled(Chip).attrs(({bold, $uppercase}) => ({
    bold: bold,
    $uppercase: $uppercase === true,  // default is lowercase
}))`
    font-weight: ${props => props.bold};
    text-transform: ${props => props.$uppercase ? 'uppercase' : 'unset'};
`;

StyledChip.propTypes = {
    bold: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    $uppercase: PropTypes.bool,
};

export default StyledChip;
