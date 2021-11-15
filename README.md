# Links API

## Infra required to run this API server

-NodeJS (preferably the latest version but should work for Node 12 and onwards)

-PostgreSQL


## Getting started

1. Install dependencies: ``yarn install``
2. Standard PostgreSQL config already defined with host=127.0.0.1 and port=5432.
   If you are using different config to this, please update this in src/config.ts
   and src/database/create
3. Create the database: ``yarn db:create``
4. Add users to the users table ``yarn add-users``
5. Start the server: ``yarn start``
6. Hit the endpoints! 


## Endpoints

The GET endpoints are public and has no auth.

``GET -> /users/:username `` fetch links by username

``GET -> /users/:username?sortBy=dateCreated `` fetch links by username sorted by date created

The POST endpoints below require user authentication (Basic Auth). After the server
verifies the user, it will save the new link and user id to the database. 

``POST -> /links/classic `` create classic link

``POST -> /links/shows-list `` create shows list link

``POST -> /links/music-player `` create music player link


## Tests

Tests can be run by using: ``yarn test``
