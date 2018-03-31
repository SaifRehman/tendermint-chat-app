import { NgModule } from '@angular/core';
import { EnvVariables } from './environment-variables.token';
import { devVariables } from './development';
import { prodVariables } from './production';
import { qaVariables } from './qa';

declare const process: any; // Typescript compiler will complain without this
export function environmentFactory() {
  // In a real app it's better to use only NODE_ENV or only IONI_ENV, as using both is confusing, but for
  // demonstration purposes I use both here. If NODE_ENV is set to qa, those variables are used, otherwise it
  // checks IONIC_ENV. There's a helper script in package.json called ionic:serve:qa that will set your NODE_ENV
  // and start the app in one command.
  if (process.env.NODE_ENV === 'qa') {
    return qaVariables;
  }

  return process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
}

@NgModule({
  providers: [
    {
      provide: EnvVariables,
      // useFactory instead of useValue so we can easily add more logic to the environment factory.
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule {}