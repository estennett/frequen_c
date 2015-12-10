# frequen.c
frequen.c is an application that facilitates the creation of podcast clubs (like book clubs!) for users.

Built by: [Eric Stennett](https://github.com/estennett), [Mia Grodsky](https://github.com/mcgrodsky) and [Elise Kain](https://github.com/elisekain)

### Technologies Used

- Express
- MongoDB
- Mongoose
- Sass
- Heroku
- iTunes API

### Installation Instructions

After cloning this repo, run the following commands in your terminal:
```
$ npm install
$ node db/seeds.js
```

For Twitter User Authentication, create an app at: https://apps.twitter.com/.
Set the Callback URL within the app to: http://127.0.0.1:4000/auth/twitter/callback.
Create a .env file (don't commit this file to git!) to store Twitter App information:
```
consumerKey="<your_consumer_key>"
consumerSecret="<your_consumer_secret>"
callbackUrl="http://127.0.0.1:4000/auth/twitter/callback"
```

Then, to run the application locally, run the following command in your terminal:
```
$ node index.js
```
Visit http://127.0.0.1:4000 to view the application

### User Stories

See: https://trello.com/b/TeFnURVf/frequen-c

### Unsolved Problems
