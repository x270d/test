import React from 'react'
import { createMuiTheme } from "@material-ui/core/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"
import Header from './components/Header'
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import NavBottom from './components/NavBottom';
import GrowColor from './pages/GrowColor';
import Mounting from './pages/Mounting';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        top: 75,
        width: 320,
        height: 'auto'
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'none'
      }
    },
    MuiToolbar: {
      root: {
        maxWidth: 1200,
        width: '100%',
        margin: '0 auto'
      }
    }
  }
});

export default function App(props) {

  return (
    <div className="app">
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route path="/" exact component={GrowColor} />
            <Route path="/mounting" exact component={Mounting} />
          </Switch>
          <NavBottom />
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  )
}


