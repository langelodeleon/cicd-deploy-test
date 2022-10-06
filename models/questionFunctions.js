const fs = require('fs');
const path = require('path');
const randomElement = require('../helpers/randomElement');

const dataFolder = path.join(__dirname, '../data');
const dataFile = process.env.DATA_FILE ? process.env.DATA_FILE : 'Responses.json';
const dataPath = path.join(dataFolder, dataFile);
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

exports.topicTitles = function topicTitles() {
  return data.topics.map(top => top.title);
};

exports.randomResponse = function randomResponse(index) {
  const topic = data.topics[index];
  return randomElement.get(topic.responses);
};

exports.randomPrompt = function randomPrompt(index) {
  if (index) {
    const topic = data.topics[index];
    return randomElement.get(topic.prompts);
  }
  return randomElement.get(data.prompts);
};
