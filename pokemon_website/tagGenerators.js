const createAttr = ([attribute, value]) => attribute + '=' + '"' + value + '"';
const attributesOf = (attributes) => attributes.map(createAttr).join(' ');

const tag = (tag, contents, attValues = []) => {
  const startTag = ''.concat('<', tag, ' ', ...attributesOf(attValues), '>');
  const endTag = ''.concat('</', tag, '>');
  return startTag + contents + endTag;
};

const uniTag = (tag, attValues = []) => {
  return ''.concat('<', tag, ' ', ...attributesOf(attValues), '/>');
};

const div = (contents, attValues) => tag('div', contents, attValues);
const article = (contents, attValues) => tag('article', contents, attValues);
const table = (contents, attValues) => tag('table', contents, attValues);
const tbody = (contents, attValues) => tag('tbody', contents, attValues);
const tr = (contents, attValues) => tag('tr', contents, attValues);
const th = (contents, attValues) => tag('th', contents, attValues);
const td = (contents, attValues) => tag('td', contents, attValues);
const header = (contents, attValues) => tag('header', contents, attValues);
const h2 = (contents, attValues) => tag('h2', contents, attValues);
const img = (attValues) => uniTag('img', attValues);
const link = (attValues) => uniTag('link', attValues);

const htmlTags = {
  div, article, table, tbody,
  tr, td, th, header, h2, img, link
};

exports.tags = htmlTags;
