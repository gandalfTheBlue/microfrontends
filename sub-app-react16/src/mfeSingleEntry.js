import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import rootComponent from "./App";
import { setEvtBus } from "./utils/eventBus";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  domElementGetter: () => document.getElementById("react-app")
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = props => {
  setEvtBus(props.eventBus);
  return reactLifecycles.mount(props);
};

export const unmount = [reactLifecycles.unmount];
