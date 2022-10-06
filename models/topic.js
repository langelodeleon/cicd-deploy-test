const questionFunctions = require('./questionFunctions');

exports.getAll = function() {
    return questionFunctions.topicTitles();
}
