import TestUtils from 'react-addons-test-utils';

// TODO: Hmm having problems with this trying to trigger from mocha.opts with
// --require ./test/must ... or something like that.
// Not working so adding here, but it should be in it's own setup file.
// @nwinch 19/04/16
import must from 'must';
import mustJSX from 'must-jsx';

mustJSX(must);

export function shallowComponent(component) {
  let renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
