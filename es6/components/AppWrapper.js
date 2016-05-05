import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";


const AppWrapper = (props) =>
        <div>
            <AppBar
                title="Speed Typer"
                iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github"/>}
            />
            <Toolbar>
                <ToolbarGroup>
                    <FlatButton label="Play" onTouchTap={props.handleClick("/play")}/>
                    <FlatButton label="Past games" onTouchTap={props.handleClick("/pastGames")}/>
                    <FlatButton label="About" onTouchTap={props.handleClick("/about")}/>
                </ToolbarGroup>
            </Toolbar>
            {props.children}
        </div>
    ;

AppWrapper.propTypes = {
    children: React.PropTypes.node.isRequired,
    handleClick: React.PropTypes.func.isRequired
};

export default AppWrapper;


