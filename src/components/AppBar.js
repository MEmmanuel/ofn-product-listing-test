import styled, { css } from 'styled-components'
import React, { PureComponent } from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import { default as MUIAppBar } from "@material-ui/core/AppBar";


export class AppBar extends PureComponent {
    render() {
        return (
            <MUIAppBar position="static">
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/OFN_logo.svg'} alt="Open Food Network Logo" />
                        <Typography variant="h5">
                            Open Food Network
                        </Typography>
                    </div>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <ShoppingCart />
                        <span>
                            My cart
                        </span>
                    </IconButton>
                </Toolbar>
            </MUIAppBar>
        )
    }
}

export default styled(AppBar)`
`
  // background: transparent;
  // border-radius: 3px;
  // border: 2px solid palevioletred;
  // color: palevioletred;
  // margin: 0 1em;
  // padding: 0.25em 1em;

  // ${props =>
  //   props.primary &&
  //   css`
  //     background: palevioletred;
  //     color: white;
  //   `};
