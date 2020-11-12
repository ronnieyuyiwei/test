class Logger {
  constructor () {
    if (!Logger._singleton) {
      Logger._singleton = this;
    }
    return Logger._singleton;
  }

  log (...args) {
    console.log(...args);
  }
  cat () {
    console.log("执行cat方法")
  }
}

export default Logger;
