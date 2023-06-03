<h1 align="center">Mastlog</h1>
<p align="center" width="80%">
<img src='https://res.cloudinary.com/dmaijlcxd/image/upload/v1685809019/mastlog-screenshot_xeimv6.png'>

# Summary
This react application was built to show my archaived Mastodon toots data. Users can filter my toots by hashtag,mention, date, and also can search toots by keyword.

## Why I made this?
The reason why I made Mastlog is that I'm more active in Mastodon and I rarely use my blog website. It's a good idea to make a blog from my Mastodon account, where I talked about my programming journey and hobbies, and also talked with various friends including more experienced developers. 
  
## Reading Bot 
- [GitHub Repo](https://github.com/Satoshi-Sh/reading-bot)
This application is run by pm2 on my server. The bot is listening to my Mastodon timeline and grabs my toots and stored them in mongoDB. 
  
## Mastlog-API
- [GitHub Repo](https://github.com/Satoshi-Sh/Mastlog-API)
This application is run by pm2 on my server. This is the API that response requests from my react app, retrieve toots from MongoDB in various ways. 
  
  
## Live Page
You can check live page [here](http://satoshis-developer.xyz/mastlog/)

  
## Technologies Used 
- React 
- TypeScript
- Express
- MongoDB
- pm2 
- Nginx
- Digital Ocean Droplet
  
## Reference 
This application was inspirted by a Japanese webservice named [Twilog](https://twilog.togetter.com/). They provide the users to create a blog from their twitter account.
