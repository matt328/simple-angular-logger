# simple-angular-logger

Simple logging facade for Angular supporting build-time environment specific options and, most importantly, AOT.

## Installation

To install this library, run:

```bash
$ npm install simple-angular-logger --save
```

You can configure the logger via the module's `forRoot` function by passing a function that produces an `Options` object.
Reasoning for this is so that you can have environment specific options, IE those that rely on something like Webpack defines
or some other mechanism that injects globals into your code at build time, and still be ok with Angular's AOT compiler.

The code is heavily inspired by other loggers for Angular, only this one is packaged properly according to the Angular
guidelines, and works with AOT.

Import and configure it:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module and model classes.
import { LoggerModule, Options, Level } from 'simple-angular-logger';

export function loggerOptions(): Options {
  if (ENV === 'production') {
    return { level: Level.WARN };
  }
  if (ENV === 'development') {
    return { level: Level.LOG };
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot(loggerOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Use it:

```typescript
import { Injectable } from '@angular/core';
import { Logger } from 'simple-angular-logger';

@Injectable()
export class MyService {

  constructor(
    private log: Logger
  ) { }

  private someMethod() {
    this.log.log('Here is a log statement');
    this.log.debug('Here is a debug statement');
    this.log.info('Here is a info statement');
    this.log.warn('Here is a warn statement');
    this.log.error('Here is a error statement');
  }
}
```

## License

Do whatever you want with it, it's like 15 lines of code.
