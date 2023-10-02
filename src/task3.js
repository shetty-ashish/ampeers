

const testObject = {
    a: 123,
    b: 'abc',
    c: [1, 2, 3]
};

const updateValue = (value) => {
  switch (typeof value) {
    case 'number':
      return value + 1;
    case 'string':
      return value + ' AE';
    case 'object': // also handles array
      if (value !== null) {
        const updatedValue = Array.isArray(value) ? [] : {};
        for (const key in value) {
          updatedValue[key] = updateValue(value[key]);
        }
        return updatedValue;
      }
      break;
      default:
        return value;
  }
};

const updatedObject = updateValue(testObject);
console.log(updatedObject);

  
  
  