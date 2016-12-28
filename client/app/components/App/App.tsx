/**
 * Created by Alexander on 27.12.2016.
 */

import * as React from "react";
import {LeftBar} from "../../containers/LeftBar/LeftBar";
import {MainContent} from "../../containers/MainContent/MainContent";

export const App = () => (
    <div className="App">
        <LeftBar />
        <MainContent />
    </div>
);