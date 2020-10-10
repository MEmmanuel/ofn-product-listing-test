import PropTypes from 'prop-types';

import styled  from 'styled-components';

import {Link} from 'react-router-dom';

export const StyledLink = styled(Link).attrs(({fontSize}) => ({
    fontSize: fontSize,
}))`
    color: inherit;
    text-decoration: none;
    font-size: ${props => props.fontSize}px;
`;

StyledLink.propTypes = {fontSize: PropTypes.number  };

export default StyledLink;
