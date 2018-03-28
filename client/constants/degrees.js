// Exposes simple interface between frontend and database
// as database strings must adhere to a certain regex and are therefore
// not expressive.
// Instead of hardcoding values repeaedly, we can just use these.

/* Account.vue */
const degrees = {
  none: 'None',
  high_school: 'High school',
  pursuing_assosociate: 'Pursuing Associate\'s Degree',
  associates: 'Associate\'s Degree',
  pursuing_bachelor: 'Pursuing Bachelor\'s Degree',
  bachelors: 'Bachelor\'s Degree',
  pursuing_master: 'Pursuing Master\'s Degree',
  masters: 'Master\'s Degree',
  pursuing_phd: 'Pursuing PhD Degree',
  phd: 'PhD degree',
};

export const degreeSelectMaxWidths = {
  none: 85,
  high_school: 200,
  pursuing_bachelor: 275,
  bachelors: 200,
  pursuing_master: 250,
  masters: 230,
  pursuing_phd: 230,
  phd: 200,
};

const objKeys = Object.keys(degrees);

export const degreeDbToString = constant => degrees[constant];
export const degreeStringToDb = string => objKeys.find(el => degrees[el] === string);

/* CreateNewJob.vue */
export const degreesReduced = {
  None: 'None (recommended)',
  High_School: 'High school',
  Associate: 'Associate\'s Degree',
  Bachelor: 'Bachelor\'s Degree',
  Master: 'Master\'s Degree',
};

const degreesReducedKeys = Object.keys(degreesReduced);
export const degreeReducedDbToString = constant => degreesReduced[constant];
export const degreeReducedStringToDb = string => degreesReducedKeys.find(el => degreesReduced[el] === string);

export default degrees;
