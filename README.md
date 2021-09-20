# Express Generator Intro



## Requirements

* [Node](https://nodejs.org/en/download/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [GitHub](https://www.github.com)
* [Express](https://expressjs.com/)
* [Express_Generator](https://www.npmjs.com/package/express-generator/)
* [Morgan](https://www.npmjs.com/package/morgan)


## Overview
Express generator will pre-make the server, folders and routes structure for you.

### In Terminal
First you will need to initialize/create the application. Create the directory where you would like this to live. Once you are in your new directory: 

1. install express generator 'npm i express-generator -g'  
   1. this sets it globally, only need to run once on your computer
2. Start your project 'express "project-name-here" --view=ejs'
3. Run  ‘npm init’
4. Create a .gitignore file. Add /node_modules
5. Connect to or init git repo


## Create Git Repo

### GitHub
1. Create new repo with app name
2. Do not add readme or anything. 

### In Terminal
1. git init
2. git add .
3. git commit -m "first commit"
4. git remote add origin https://github.com/'USERNAME'/'repo-name'.git

- 'git push' will throw an error
- 'git push origin master' will push to your repo only once. You need to set the upstream to continually push.
5. git push --set-upstream origin master

## Edit EJS files
Edit your ejs files to display 'HTML' dynamically
- [EJS-syntax](https://ejs.co/)

