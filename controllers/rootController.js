const topics = require('../models/topic');
const responses = require('../models/response');
const prompts = require('../models/prompt');
const randomElement = require('../helpers/randomElement');

module.exports = {
  showQuestion(req, res) {
    const tops = topics.getAll();
    const topicIndex = req.query.topic ? req.query.topic : randomElement.getIndex(tops.length);
    const response = responses.getRandom(topicIndex);
    const prompt = req.query.topic ? prompts.getRandom(topicIndex) : prompts.getRandom();

    res.render('index', {
      title: 'cicddeploy',
      prompt,
      response,
      topics: tops,
    });
  },
};

