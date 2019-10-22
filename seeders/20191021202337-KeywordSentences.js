'use strict';


const sentences = [
    {
        sentenceId: 1,
        keywordId: 1
    },
    {
        sentenceId: 2,
        keywordId: 1
    },
    {
        sentenceId: 3,
        keywordId: 1
    },
    {
        sentenceId: 4,
        keywordId: 2
    },
    {
        sentenceId: 5,
        keywordId: 2
    },
    {
        sentenceId: 6,
        keywordId: 2
    },
    {
        sentenceId: 7,
        keywordId: 3
    },
    {
        sentenceId: 8,
        keywordId: 3
    },
    {
        sentenceId: 9,
        keywordId: 3
    },
    {
        sentenceId: 10,
        keywordId: 4
    },
    {
        sentenceId: 11,
        keywordId: 4
    },
    {
        sentenceId: 12,
        keywordId: 4
    },
    {
        sentenceId: 13,
        keywordId: 5
    },
    {
        sentenceId: 14,
        keywordId: 5
    },
    {
        sentenceId: 15,
        keywordId: 5
    },
    {
        sentenceId: 16,
        keywordId: 6
    },
    {
        sentenceId: 17,
        keywordId: 6
    },
    {
        sentenceId: 18,
        keywordId: 6
    },
    {
        sentenceId: 19,
        keywordId: 7
    },
    {
        sentenceId: 20,
        keywordId: 7
    },
    {
        sentenceId: 21,
        keywordId: 7
    },
    {
        sentenceId: 22,
        keywordId: 8
    },
    {
        sentenceId: 23,
        keywordId: 8
    },
    {
        sentenceId: 24,
        keywordId: 8
    }];



module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('KeywordSentences', sentences, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('KeywordSentences', null, {});
    }
}

