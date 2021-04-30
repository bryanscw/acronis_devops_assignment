import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Form from "../../pages/form/form";

export default () =>
    <div>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/add" exact component={Form}/>
        </Switch>
    </div>;