compiler.hooks.compile.tap('MyPlugin', params => {
  console.log('Synchronously tapping the compile hook.');
});

compiler.hooks.run.tapAsync('MyPlugin', (source, target, routesList, callback) => {
  console.log('Asynchronously tapping the run hook.');
  callback();
});

compiler.hooks.run.tapPromise('MyPlugin', (source, target, routesList) => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
    console.log('Asynchronously tapping the run hook with a delay.');
  });
});

compiler.hooks.run.tapPromise('MyPlugin', async (source, target, routesList) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Asynchronously tapping the run hook with a delay.');
});

const SyncHook = require('tapable').SyncHook;

if (compiler.hooks.myCustomHook) throw new Error('Already in use');
compiler.hooks.myCustomHook = new SyncHook(['a', 'b', 'c']);

// Wherever/whenever you'd like to trigger the hook...
compiler.hooks.myCustomHook.call(a, b, c);

compiler.hooks.emit.tapAsync({
  name: 'MyPlugin',
  context: true
}, (context, compiler, callback) => {
  const reportProgress = context && context.reportProgress;
  if (reportProgress) reportProgress(0.95, 'Starting work');
  setTimeout(() => {
    if (reportProgress) reportProgress(0.95, 'Done work');
    callback();
  }, 1000);
});