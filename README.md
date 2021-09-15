INSTALLATION
------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`


You can visit the github repo for this project on [Github](https://github.com/lanejm/crealyticstest).

You will need to run ### `npm install` to make sure you have the correct npm versions.  You will also need to connect to a backend server for app to work properly. 

The server side of this app is running on postgres.  You will need to install postrgess and connect to a database.  Database is connected through db.js file and runs on [http://localhost:3000](http://localhost:3000) on local machine. You will need to start the server side of this app in order to make the api call to postgres and for data to return.  

FUNCTIONALITY
-------------
You can search for items based off of title.  Search bar dynamically loads items as keys are pressed.  Returns 100 items. **Not fully functional, currently** 

AUTHORS
-------
Joshua Lane - intial work - [lanejm](https://github.com/lanejm)