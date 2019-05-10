import * as Mitt from 'mitt/dist/mitt.umd';
import { Emitter } from 'mitt';

let eventBus: mitt.Emitter = undefined;

export const setEvtBus = evtBus => {
  eventBus = evtBus;
};

const initEventBus = () => {
  if (!eventBus) {
    eventBus = new Mitt() as Emitter;
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

export const eventOff = (event, callBack) => {
  initEventBus();
  eventBus.off(event, callBack);
};
