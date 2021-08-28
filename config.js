export const config = {
  filename: '_spacing.scss',
  units: 'rem',
  maxUnit: 10,
  step: 0.5,
  spacingTypes: [
    { cssProperty: 'padding', abbreviation: 'p' },
    { cssProperty: 'margin', abbreviation: 'm' },
  ],
  modifiers: [
    { cssProperty: 'top', abbreviation: 't' },
    { cssProperty: 'bottom', abbreviation: 'b' },
    { cssProperty: 'left', abbreviation: 'l' },
    { cssProperty: 'right', abbreviation: 'r' },
  ],
};
