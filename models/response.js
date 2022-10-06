const questionFunctions = require('./questionFunctions');

exports.getRandom = function getRandom(topic) {
  return questionFunctions.randomResponse(topic);
};
