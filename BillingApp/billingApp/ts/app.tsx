import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Mobx from "mobx";

import Hello from "./HelloComponent/Hello";


Mobx.useStrict(true);
//Mobx.extras.isolateGlobalState();
//Mobx.extras.shareGlobalState();

ReactDOM.render(
    <Hello name="Espen2" />,
        document.getElementById("root")
);
