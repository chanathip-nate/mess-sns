# MESS - Social Media 

Why I made this?
- I quite want to know more about APIs technologies and I found GraphQL so I think it is an opportunity to learn GraphQL by making some SNS.
- I do watch a lot of tutorial and documentation from the internet and I have learned a lot from it.

Tech that I used
1. MongoDB
2. Express (Apollo)
3. NodeJS
4. GraphQL

Feature
- Create user
- Create user validation
- Login
- Login validation
- Password encryption
- Timeout token
- Create post
- Delete post
- Create comment
- Delete comment

How to start?
- After download, you need to make config.js and install all dependencies.
  Config.js contains two variables as a object. - MONGODB: #YOUR MONGO KEY# - SECRET_KEY: #CAN BE ANYTHING TO PREVENT HACKING#
- Then, open the terminal and do npm start
- Go to localhost:5000 and try GraphQL Query that I have made or you can use POSTMAN but the syntax will be more complex.
- Check the query at './graphql'

How it works?
- I use MongoDB as database to store the USER and POST.
- Instead of using REST, I use GraphQL to combine the endpoint and use the GraphQL query to ask for APIs.
- Validation part for create USER, I use @hapi/joi to make validation more easier
- You can use this as a server then if you want to make it more usable, you need to make a frontend by using the tech you like such as React, Angular or whatever.

* note that for @hapi/joi if you want to use latest version, you need to change a code for @hapi/joi
