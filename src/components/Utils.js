var exports = {};

exports.getDisplayName = (component) => {
  return component.displayName || component.name || 'Component';
}

export default exports;