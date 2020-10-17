import React, { Fragment } from 'react';
import { graphql } from "react-apollo"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { IS_LOGGED_IN } from "./AppQueries";
import AppPresenter from "./AppPresenter";
import {ThemeProvider} from "../../typed-components";
import {theme} from "../../theme";
import GlobalStyle from 'global-styles';


const AppContainer : any = (props) => {
    return (
        <Fragment>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <AppPresenter isLoggedIn={props.data.auth.isLoggedIn}/>
            </ThemeProvider>
            <ToastContainer draggable={true} position="bottom-center" />
        </Fragment>
    )
}

export default graphql(IS_LOGGED_IN)(AppContainer);