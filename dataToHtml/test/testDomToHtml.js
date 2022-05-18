const assert = require('assert');
const tagOf = require('../src/domToHtml.js').tagOf;

describe( 'DOM to HTML', () => {
  it( 'should create single html tag', () => {
    const actual = tagOf('html', {}, '');
    const expected = '<html ></html>';
    assert.strict.deepEqual(actual, expected);
  });
  it( 'should create nested div tags', () => {
    const actual = tagOf('div', {}, ['div', {}, '']);
    const expected = '<div ><div ></div></div>';
    assert.strict.deepEqual(actual, expected);
  });
  it( 'should create uni tag (standalone)', () => {
    const actual = tagOf('link', {href: 'potato', rel: 'stylesheet'}, '');
    const expected = '<link href="potato" rel="stylesheet"/>';
    assert.strict.deepEqual(actual, expected);
  });
  it( 'should create a tag with attributes', () => {
    const actual = tagOf('div', { class: 'page-wrapper', id: 1 }, '');
    const expected = '<div class="page-wrapper" id="1"></div>';
    assert.strict.deepEqual(actual, expected);
  });
});
