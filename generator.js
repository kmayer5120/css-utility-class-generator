const spacingTypes = [
  { cssProperty: 'padding', abbreviation: 'p' },
  { cssProperty: 'margin', abbreviation: 'm' },
];

const modifiers = [
  { cssProperty: 'top', abbreviation: 't' },
  { cssProperty: 'bottom', abbreviation: 'b' },
  { cssProperty: 'left', abbreviation: 'l' },
  { cssProperty: 'right', abbreviation: 'r' },
];

const maxRem = 10;

const handleDecimal = (value) => {
  return value % 1 !== 0 ? `${value}`.split('.').join('\\.') : value;
};

const formatString = (spacingType, modifier, value) => {
  return `\n.${spacingType.abbreviation}${
    modifier.abbreviation
  }-${handleDecimal(value)} \{
  ${spacingType.cssProperty}-${
    modifier.cssProperty
  }: ${value}rem !important;\n\}\n`;
};

const generateCSS = (spacingType, modifiers, maxRem) => {
  let generatedCSS = '';

  modifiers.forEach((modifier) => {
    for (let i = 0; i <= maxRem; i += 0.25) {
      generatedCSS += formatString(spacingType, modifier, i);
    }
  });

  return generatedCSS;
};

let generatedCSS = spacingTypes.reduce((type) =>
  generateCSS(type, modifiers, maxRem)
);

console.log(generatedCSS);
