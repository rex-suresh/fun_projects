const fs = require('fs');

const getBinary = (number) => {
  if (number) {
    return number.toString(2);
  } return '0';
};

const binaryNumber = getBinary(+process.argv[2]);

const cwd = process.cwd();

const createAttr = ([attribute, value]) => attribute + '=' + '"' + value + '"';
const attributesOf = (attributes) => attributes.map(createAttr).join(' ');

const tag = (tag, contents, attValues = []) => {
  const startTag = ''.concat('<', tag, ' ', ...attributesOf(attValues), '>');
  const endTag = ''.concat('</', tag, '>');
  return startTag + contents + endTag;
};

const div = (contents, attValues) => tag('div', contents, attValues);
 
const generateBlocks = function (binaryNumber) {
  const switchStatus = binaryNumber.match(/./g).reverse();

  return switchStatus.map(
    (status, pos) => div(Math.pow(2, pos),
      [['class', status === '1' ? 'on' : 'off']])).reverse();
};

const createPage = function (binaryNumber, cwd) {
  const pageTemplate = fs.readFileSync('./webpage_template.html', 'utf8'); 
  const pageContent = pageTemplate.replace(
    /__binary bits__/, generateBlocks(binaryNumber).join(''));
  
  fs.writeFileSync(cwd + '/index.html', pageContent, 'utf8');
};

createPage(binaryNumber, cwd);
