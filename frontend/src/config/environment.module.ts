import { NgModule } from '@angular/core';
import { Environment } from './environment.token';
import { productionConfig } from './env.production';
import { developConfig } from './env.develop';

export function environmentFactory() {
  switch (process.env.NODE_ENV) {
    case 'dev':
      return developConfig;
    case 'prod':
      return productionConfig;
    default:
      throw new Error('Enviroment not set');
  }
}

@NgModule({
  providers: [
    {
      provide: Environment,
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule { }