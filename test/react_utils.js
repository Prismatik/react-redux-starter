import must from 'must';
import mustJSX from 'must-jsx';
import TestUtils from 'react-addons-test-utils';

mustJSX(must);

export function shallowComponent(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
