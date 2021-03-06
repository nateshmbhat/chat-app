# coder-chat
A webapp built with react and express that is useful during coding sessions and other use cases that involve chatting and coding.

## Features :
+ Code transparently in a team with everyone being able to see everyone else's code in realtime.
+ Run any number of servers , each forming its own subgroup for communication and code sharing.
+ Chat with all the members currenlty using the app to receive realtime chat updates.
+ A fully featured code editor with options for theme customizations and multiple language support.
+ Live code editor supports multiple languages with syntax highlights and also supports **vim** keybindings.
+ Syncs code from various users of the app in the network updates in real time letter by letter with corresponding language highlights.
+ Watch a user in the network code live from the shown user's list who are using the app.



## Usage :
+ Start a server in your system by doing the following : 
    + go inside the `server` folder.
    + run `npm i` command to install dependencies (first run)
    + run `npm start` to start the server.
    + Open a new terminal and go to the same `server` folder.
    + Now enter command `npm run expose  -- --port 9000`  where 9000 is the default port number on which server is running. This will give a url link that is accessible globally.
+ Go to [coderchat](coderchat.netlify.com) website and click on `Server Setup` option and paste the above generated URL link there. 
+ Now any group of users on the internet who enter the above url link will be able to chat and use the live coding feature seamlessly :)



### A Small Demo showing some of the Live Code sync and chatting features : 

[![](http://img.youtube.com/vi/dpZ1zrcPBww/0.jpg)](http://www.youtube.com/watch?v=dpZ1zrcPBww "Coder Chat Demo")
