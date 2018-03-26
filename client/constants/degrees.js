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

export default degrees;
