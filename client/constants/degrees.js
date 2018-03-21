const degrees = {
  none: 'None',
  high_school: 'High school',
  pursuing_bachelor: 'Pursuing Bachelor\'s degree',
  bachelors: 'Bachelor\'s degree',
  pursuing_master: 'Pursuing Master\'s degree',
  masters: 'Master\'s degree',
  pursuing_phd: 'Pursuing PhD degree',
  phd: 'PhD degree',
};

const objKeys = Object.keys(degrees);

export const degreeDbToString = constant => degrees[constant];
export const degreeStringToDb = string => objKeys.find(el => degrees[el] === string);

export default degrees;
