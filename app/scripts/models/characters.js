function Character(config) {
  config = config || {};

  return Object.assign({}, this, config);
}

export default Character;
