export const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) return {};

  return Object.keys(nestedMessages).reduce((messages, key) => {
    const { [key]: value } = nestedMessages;
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};
