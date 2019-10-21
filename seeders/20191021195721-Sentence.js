'use strict';

const sentences = [
    {
        sentence:'has a great sense of humor, and knows how to make people laugh',
    },
    {
        sentence:'is great at building up positive energy in a room with his/her sense of humor, and ability to make people laugh',
    },
    {
        sentence:'is a master when it comes to making jokes and can turn any negative energy into barrels of laughter',
    },
    {
        sentence:'is always in good spirits and looking on the bright side',
    },
    {
        sentence:'does not get bogged down by negativity and is always looking for a silver lining',
    },
    {
        sentence: 'is always moving with a spring in his/her step exuberating positive energy to everyone around him/her',
    },
    {
        sentence: 'is perceived by many as highly intelligent and well articulated',
    },
    {
        sentence: 'is quick to grasp new concepts and has a proven track record, excelling in academic challenges',
    },
    {
        sentence: 'has a high IQ and is seen as a leader in the field of their academic endeavors',
    },
    {
        sentence: 'is a considerate person who always thinks about how his/her actions affect others',
    },
    {
        sentence: 'is a compassionate person who empathises with others and their unique challenges in life',
    },
    {
        sentence: 'is a thoughtful person who values relationships and makes time for the people they care about',
    },
    {
        sentence: 'believes honesty is always the best policy',
    },
    {
        sentence: 'has a reputation for his/her integrity and is seen as highly trustworthy to his/her peers',
    },
    {
        sentence: 'believes that honesty in the workplace is essential to establishing strong working relationships',
    },
    {
        sentence: 'is quick to think of new ideas',
    },
    {
        sentence: 'is the first to come up with a creative solution when faced with complex problems',
    },
    {
        sentence: 'is known by many as a realistic dreamer who is constantly thinking of ways to improve the world around us',
    },
    {
        sentence: 'is described by many as a go getter who is self motivated',
    },
    {
        sentence: 'knows what he\she wants and is prepared to push him/herself to reach his/her goals',
    },
    {
        sentence: 'never gives up and continues to take action despite obstacles in his/her path',
    },
    {
        sentence: 'is seen by many as a natural leader that others look up to',
    },
    {
        sentence: 'oozes with confidence and is highly assertive, making him/her and effective leader that others follow',
    },
    {
        sentence: 'is described as aspiring by his/her pairs which make him/her a persuasive leader',
}];





module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Sentences', sentences, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Sentences', null, {});
  }
}
