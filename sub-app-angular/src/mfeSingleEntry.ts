import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import singleSpaAngular2 from 'single-spa-angular2';
import { setEvtBus } from './app/utils/eventBus';

const ng2Lifecycles = singleSpaAngular2({
  domElementGetter: () => document.getElementById('angular-app'),
  mainModule: AppModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<app-root />`
});

export const bootstrap = [ng2Lifecycles.bootstrap];

export const mount = props => {
  setEvtBus(props.eventBus);
  return ng2Lifecycles.mount(props);
};

export const unmount = [ng2Lifecycles.unmount];
