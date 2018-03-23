const degrees = {
  none: 'None',
  high_school: 'High school',
  pursuing_bachelor: 'Pursuing Bachelor\'s Degree',
  bachelors: 'Bachelor\'s Degree',
  pursuing_master: 'Pursuing Master\'s Degree',
  masters: 'Master\'s Degree',
  pursuing_phd: 'Pursuing PhD Degree',
  phd: 'PhD degree',
};

const objKeys = Object.keys(degrees);

export const degreeDbToString = constant => degrees[constant];
export const degreeStringToDb = string => objKeys.find(el => degrees[el] === string);

export default degrees;
