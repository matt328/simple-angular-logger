import { Injectable } from '@angular/core';
import { Level } from './level';

/**
 * Logger options.
 * See {@link Logger}.
 *
 * level - How much detail you want to see in the logs, 0 being off, 1 being the less detailed, 5 being the most. Defaults to LOG.
 */
export class Options {
  level: Level;
}

// For browsers that don't implement the debug method, log will be used instead. Fixes #62.
const CONSOLE_DEBUG_METHOD = console['debug'] ? 'debug' : 'log';

const DEFAULT_OPTIONS: Options = {
  level: Level.LOG,
};

@Injectable()
export class Logger {

  private _level: Level;
  public Level: any = Level;

  constructor(options: Options) {
    let { level } = Object.assign({}, DEFAULT_OPTIONS, options);
    this._level = level;
  }

  error(message?: any, ...optionalParams: any[]) {
    if (this.isErrorEnabled()) {
      console.error.apply(console, arguments);
    }
  }

  warn(message?: any, ...optionalParams: any[]) {
    if (this.isWarnEnabled()) {
      console.warn.apply(console, arguments);
    }
  }

  info(message?: any, ...optionalParams: any[]) {
    if (this.isInfoEnabled()) {
      console.info.apply(console, arguments);
    }
  }

  debug(message?: any, ...optionalParams: any[]) {
    if (this.isDebugEnabled()) {
      (<any>console)[CONSOLE_DEBUG_METHOD].apply(console, arguments);
    }
  }

  log(message?: any, ...optionalParams: any[]) {
    if (this.isLogEnabled()) {
      console.log.apply(console, arguments);
    }
  }

  isErrorEnabled = (): boolean => this.level >= Level.ERROR;
  isWarnEnabled = (): boolean => this.level >= Level.WARN;
  isInfoEnabled = (): boolean => this.level >= Level.INFO;
  isDebugEnabled = (): boolean => this.level >= Level.DEBUG;
  isLogEnabled = (): boolean => this.level >= Level.LOG;

  get level(): Level {
    return this._level;
  }

  set level(level: Level) {
    this._level = level;
  }

}
