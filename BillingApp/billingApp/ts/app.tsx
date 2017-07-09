import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Mobx from "mobx";

import Hello from "./HelloComponent/Hello";


Mobx.useStrict(true);

ReactDOM.render(
    <Hello name="Espen2" />,
        document.getElementById("root")
);




// if(module.hot){
//     module.hot.accept();
// }