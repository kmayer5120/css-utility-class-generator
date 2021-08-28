import * as fs from 'fs';
import { config } from './config.js';

const { filename, units, maxUnit, spacingTypes, modifiers } = config;
let { step } = config;

const handleDecimal = (value) => {
  return value % 1 !== 0 ? `${value}`.split('.').join('\\.') : value;
};

const formatString = (spacingType, modifier, value) => {
  return `\n.${spacingType.abbreviation}${
    modifier.abbreviation
  }-${handleDecimal(value)} \{
  ${spacingType.cssProperty}-${
    modifier.cssProperty
  }: ${value}${units} !important;\n\}\n`;
};

const generateCSS = (spacingType, modifiers, maxUnit) => {
  let generatedCSS = '';

  modifiers.forEach((modifier) => {
    for (let i = 0; i <= maxUnit; i += step) {
      generatedCSS += formatString(spacingType, modifier, i);
    }
  });

  return generatedCSS;
};

const generatedCSS = spacingTypes
  .map((type) => generateCSS(type, modifiers, maxUnit))
  .join('');

fs.writeFile(filename, generatedCSS, (err) => {
  if (err) console.log(err);
  else {
    console.log('File written successfully\n');
  }
});
