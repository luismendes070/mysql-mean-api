
class HelloAsyncPlugin{

  private callback:any;

  constructor(private callback:any) {
    this.callback=callback;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('HelloAsyncPlugin', (compilation, callback) => {
      // Do something async...
      setTimeout(function() {
        console.log('Done with async work...');
        callback();
      }, 1000);
    });
  }

}

exports.module = HelloAsyncPlugin;
