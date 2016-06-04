import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {browserHistory} from "react-router";
import {routerMiddleware, syncHistoryWithStore} from "react-router-redux";
import * as websocket from "./actions/websocket";
import {receivedRemoteState} from "./actions/remote";
import constantActionLogger from "./middleware/ConstantActionLogger";
import websocketPublisher from "./middleware/WebsocketPublisher";
import reducer from "./reducers";
import createRoutes from "./routes";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();


const finalCreateStore = compose(
    applyMiddleware(
        thunkMiddleware,
        routerMiddleware(browserHistory),
        websocketPublisher(websocket.sendMessage),
        constantActionLogger(console)
    ),
    window.devToolsExtension ? window.devToolsExtension() : x => x
)(createStore);

let store = finalCreateStore(reducer);


const history = syncHistoryWithStore(browserHistory, store);
let Routes = createRoutes(history);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Routes />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('content')
);

store.dispatch(
    websocket.connectionRequested(
        receivedRemoteState
    )
);
