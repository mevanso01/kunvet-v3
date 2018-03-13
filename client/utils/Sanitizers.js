class Sanitizers {
  static sanitizeJobTypes(jobTypes) {
    const types = [];
    for (const i in jobTypes) {
      if (typeof jobTypes[i] === 'string') {
        const type = jobTypes[i];
        if (type === 'fulltime') {
          types.push('Full-time');
        } else if (type === 'parttime') {
          types.push('Part-time');
        } else {
          types.push(type);
        }
      }
    }
    return types;
  }
}

export default Sanitizers;
