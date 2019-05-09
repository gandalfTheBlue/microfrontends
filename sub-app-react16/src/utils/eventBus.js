import { default as Mitt } from "mitt";

let eventBus = undefined;

export const setEvtBus = evtBus => {
  eventBus = evtBus;
};

const initEventBus = () => {
  if (!eventBus) {
    eventBus = new Mitt();
  }
};

export const eventOn = (event, callBack) => {
  initEventBus();
  eventBus.on(event, callBack);
};

export const eventEmit = (event, data) => {
  initEventBus();
  eventBus.emit(event, data);
};
