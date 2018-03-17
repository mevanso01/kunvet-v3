const degrees = {
  pursuing_bachelor: 'Currently pursuing Bachelor\'s degree',
  bachelors: 'Bachelor\'s degree',
  pursuing_master: 'Currently pursing Master\'s degree',
  masters: 'Master\'s degree',
  pursuing_phd: 'Currently pursuing PhD degree',
  phd: 'PhD degree',
};

const objKeys = Object.keys(degrees);

export const degreeDbToString = constant => degrees[constant];
export const degreeStringToDb = string => objKeys.find(el => degrees[el] === string);

export default degrees;
