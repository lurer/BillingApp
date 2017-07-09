
import * as React from "react";
interface IHelloProps {
    name: string;
}
export default class Hello extends React.Component<IHelloProps, {}> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}