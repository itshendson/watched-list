## Watched List

WORK IN PROGRESS

## Idea

People like to "show off" the television shows they've seen, the handpicked anime that they've fallen in love with, the video games they've experienced and the books they've read. The media they've consumed is a representation of who they are.

The concept of this app is to let people show off who they are through the TV shows, animes, video games, and books they've read.

## Thoughts/Problems 

Problems:
1. Should I use CommonJS or ES6 Modules? Node-Fetch ver 3.0+ no longer supports CommonJS - Only ES6 Modules. NodeJS by default supports CommonJS and "require" statements. So I must decide whether to use CommonJS or ES6 Modules.
- Ended up going with CommonJS since all documentation seems to use commonjs. No point trying to stick with ES6 module and have to fight with every documentation to get ES6 modules to work with my code. The only reason I used ES6 modules in the first place was to use node-fetch ver. 3.0 and higher.

2. Should I use Jikan API to pull information about anime or just use the IMDB API to pull both "television" series AND "anime" series?
- Ended up using Jikan for simplicity and up to date database.

3. Trying to learn and get Passport Local to work. May have to use Passport JWT instead.

4. Changed GitHub repo to private to prevent bots from cloning my repo automatically.

## Amazing Keyboard Shortcuts
- You can use ctrl + shift + \ to jump to the opening/closing bracket/braces!!!

## Pages That I Need
- /search - ANYONE, logged in or not, should be able to see this page (but only users logged in can add)
- /:id - ANYONE, logged in or not, should be able to see this page (but only users logged in can edit)
- / - home page, explaining the app and with a google login button

## Technologies
- JavaScript
- Node.js
- Express.js
- Passport Local Strategy or Passport JWT or Passport Google Strategy?
- Mongoose
- Express Cookie Session


## Resources
List of the best resources I've encountered for future reference

Clear explanation of passport local and cookie sessions
https://levelup.gitconnected.com/everything-you-need-to-know-about-the-passport-local-passport-js-strategy-633bbab6195

Example of Passport Google Strategy with OAuth
https://medium.com/@prashantramnyc/how-to-implement-google-authentication-in-node-js-using-passport-js-9873f244b55e
