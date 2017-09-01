// 1. Your survey should have 10 questions of 
// your choosing. Each answer should be on a scale 
// of 1 to 5 based on how much the user agrees or 
// disagrees with a question.

// 5. You should save your application's data inside of 
// `app/data/friends.js` as an array of objects. 
// Each of these objects should roughly follow the format below.

var friends = [
  {
  "name":"Patrick",
  "photo":"https://ih0.redbubble.net/image.213230506.1898/flat,800x800,075,f.jpg",
  "scores":[
    3,
    2,
    4,
    5,
    1,
    1,
    1,
    3,
    5,
    2
      ]
},
{
  "name":"Sandy",
  "photo":"http://pm1.narvii.com/6102/b487565d01d719852d855bc558b0e23a5277e20b_hq.jpg",
  "scores":[
    5,
    4,
    2,
    1,
    1,
    5,
    2,
    2,
    1,
    2
      ]
},
{
  "name":"Mr Krabs",
  "photo":"https://static.comicvine.com/uploads/original/3/37908/875420-mr_krabs_1_.jpg",
  "scores":[
    1,
    3,
    1,
    4,
    5,
    3,
    2,
    1,
    1,
    5
      ]
},
{
  "name":"Gary",
  "photo":"https://static.comicvine.com/uploads/scale_small/11132/111325030/5880119-spongebob+squarepants+gary+the+snail.jpg",
  "scores":[
    4,
    4,
    5,
    1,
    1,
    2,
    1,
    5,
    5,
    2
      ]
},
{
  "name":"Squidward",
  "photo":"http://www.behindthevoiceactors.com/_img/chars/squidward-tentacles-spongebob-squarepants-typing-4.53.jpg",
  "scores":[
    4,
    5,
    3,
    2,
    1,
    4,
    5,
    2,
    1,
    4
      ]
},
]

module.exports = friends;