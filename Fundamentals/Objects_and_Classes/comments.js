function comments(input) {
    let users = [];
    let articles = [];
    let articlesComments = {};

    for (let string of input) {
        if (string.includes('user ')) {
            let user = string.split(' ')[1];
            users.push(user);

        } else if (string.includes('article ')) {
            let article = string.split(' ')[1];
            articles.push(article);

        } else if (string.includes(':')) {
            let [userAndArticle, comment] = string.replace(' posts on ', ' ').split(': ');
            let [user, article] = userAndArticle.split(' ');
            if (users.includes(user) && articles.includes(article)) {
                let [title, content] = comment.split(', ');
                if (!articlesComments.hasOwnProperty(article)) {
                    articlesComments[article] = [];
                }
                articlesComments[article].push({ user, title, content });
            }
        }
    }

    let sortedArticlesByNumberOfComments = Object.keys(articlesComments)
        .sort((a, b) => articlesComments[b].length - articlesComments[a].length)
        .forEach(article => {
            console.log(`Comments on ${article}`);

            let comments = articlesComments[article]
                .sort((a, b) => a.user.localeCompare(b.user))
                .forEach(comment => {
                    console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
                });
        });
}
comments([
    'user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser',
    'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])


/*
Write a function that stores information about users and their comments in a website. You have to store the users, the comments as an object with title and content and the article that comment is about. The user can only comment, when he is on the list of users and the article is in the list of articles. The input comes as array of strings. The strings will be in format:
"user {username}" – add the user to the list of users
"article {article name}" – add the article to the article list
"{username} posts on {article name}: {comment title}, {comment content}" – save the info
At the end sort the articles by count of comments and print the users with their comments ordered by usernames in ascending.
Print the result in the following format:
"Comments on {article1 name}:
--- From user {username1}: {comment title} - {comment content}
--- From user {username2}: …
Comments on {article2 name}:
…"
*/