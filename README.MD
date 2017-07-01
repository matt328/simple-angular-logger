# simple-angular-logger

## Installation

To install this library, run:

```bash
$ npm install simple-angular-logger --save
```

Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
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

## License

MIT © [Matt Teeter](matt328@gmail.com)
