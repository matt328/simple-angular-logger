import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger, Options } from './logger';

export { Logger, Options } from './logger';
export { Level } from './level'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ]
})
export class LoggerModule {
  public static forRoot(options: () => Options): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: Options, useFactory: options },
        Logger
      ]
    };
  }
}
