/**
 * Created by Alexander on 27.12.2016.
 */

import * as React from "react";
import {LeftBar} from "../../containers/LeftBar/LeftBar";
import {MainContent} from "../../containers/MainContent/MainContent";

import * as styles from "./styles.less";

console.log(styles);
console.log(styles.app);

export const App = () => (
    <div className={styles.app}>
        <LeftBar />
        <MainContent />
    </div>
);