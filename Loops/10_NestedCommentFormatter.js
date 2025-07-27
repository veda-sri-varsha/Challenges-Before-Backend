// 10. Nested Comment Formatter
//  Input: Array of comments, each with nested replies.
//  Goal: Flatten and print all comments with parent info using loop/recursion.

const comments = [
  {
    id: 1,
    text: "Great video",
    replies: [
      {
        id: 2,
        text: "Thanks!",
        replies: [
          {
            id: 3,
            text: "You're welcome",
            replies: []
          }
        ]
      },
      {
        id: 4,
        text: "Loved it",
        replies: []
      }
    ]
  },
  {
    id: 5,
    text: "Nice edit",
    replies: []
  }
];

function showComments(list, parent = null, level = 0) {
  for (let comment of list) {
    console.log(`${'  '.repeat(level)}ID: ${comment.id}, Text: "${comment.text}", Parent: ${parent}`);
    
    if (comment.replies.length > 0) {
      showComments(comment.replies, comment.id, level + 1);
    }
  }
}

showComments(comments);
