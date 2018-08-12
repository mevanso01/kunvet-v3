class StringHelper {
  static pluralize(string, count) {
    if (count > 1 || count === 0) {
      if (string.charAt(string.length - 1) === 's') {
        return `${string}'`;
      }
      return `${string}s`;
    }
    return string;
  }

  static listToString(strings, delimiter = ',', shouldCapitalize = true) {
    let mutableStr = '';
    for (let i = 0; i < strings.length - 1; ++i) {
      const str = shouldCapitalize ? StringHelper.capitalize(strings[i]) : strings[i];
      mutableStr += str;
      if (delimiter === ',') mutableStr += `${delimiter} `;
      if (delimiter === '/') mutableStr += ` ${delimiter} `;
    }
    const finalStr = StringHelper.capitalize
      ? StringHelper.capitalize(strings[strings.length - 1])
      : strings[strings.length - 1];
    return mutableStr + finalStr;
  }

  static listToCommaString(strings) {
    return StringHelper.listToString(strings);
  }

  static listToSlashString(strings) {
    return StringHelper.listToString(strings, '/');
  }

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1, string.length);
  }

  static truncate(string, length = 40) {
    if (string.length <= length) {
      return string;
    }
    return `${string.substring(0, length)}...`;
  }
}

export default StringHelper;
