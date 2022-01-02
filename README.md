"# Watched List" 

Work in progress:

People like to "show off" the television shows they've seen, the handpicked anime that they've fallen in love with, the video games they've experienced and the books they've read. The media they've consumed is a representation of who they are.

The concept of this app is to let people show off who they are through the TV shows, animes, video games, and books they've read.

Problems:
1. Should I use CommonJS or ES6 Modules? Node-Fetch ver 3.0+ no longer supports CommonJS - Only ES6 Modules. NodeJS by default supports CommonJS and "require" statements. So I must decide whether to use CommonJS or ES6 Modules.
- Ended up going with CommonJS since all documentation seems to use commonjs. No point trying to stick with ES6 module and have to fight with every documentation to get ES6 modules to work with my code. The only reason I used ES6 modules in the first place was to use node-fetch ver. 3.0 and higher.

2. Should I use Jikan API to pull information about anime or just use the IMDB API to pull both "television" series AND "anime" series?
- Ended up using Jikan for simplicity and up to date database.

3. Trying to learn and get Passport Local to work. May have to use Passport JWT instead.

## Technologies
- JavaScript
- Node.js
- Express.js
- Passport Local Strategy or Passport JWT
- Mongoose
- Express Cookie Session


