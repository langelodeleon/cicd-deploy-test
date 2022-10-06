const questionFunctions = require('./questionFunctions');

exports.getRandom = function getRandom(topic) {
  return questionFunctions.randomPrompt(topic);
};
