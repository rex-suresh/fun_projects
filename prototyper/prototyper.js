/* eslint-disable no-magic-numbers */

const fs = require('fs');
const templateFile = process.argv[2];
const prototypeName = process.argv[3] || 'prototypedFile';
const template = fs.readFileSync(templateFile, 'utf8');

const placeHoldersOf = function (template) {
  const placeHolders = template.match(/__[A-z0-9]*__/g);
  return placeHolders;
};

const createPrototype = function (template, placesAndValues) {
  let newTemplate = template;
  for (const place in placesAndValues) {
    newTemplate = newTemplate.replace(place, placesAndValues[place]);
  }
  return newTemplate;
};

const writeToFile = function (template, prototypeName) {
  const prototypedTemplate = createPrototype(template, placesAndValues);
  fs.writeFileSync(prototypeName, prototypedTemplate, 'utf-8');
};

// console.log(placeHoldersOf(templateFile));
const placesAndValues = {
  'some Holder': 'itsValue'
};

writeToFile(template, prototypeName);

exports.placeHoldersOf = placeHoldersOf;
exports.writeToFile = placeHoldersOf;
