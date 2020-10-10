import React  from 'react';

import styled  from 'styled-components'
import {Link} from "react-router-dom";


export const StyledLink = styled(Link).attrs(({fontSize}) => ({
    fontSize: fontSize,
}))`
    color: inherit;
    text-decoration: none;
    font-size: ${props => props.fontSize}px;
`;

export default StyledLink;
