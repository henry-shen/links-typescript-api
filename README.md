# Links API

## Infra required to run this API server

-NodeJS (preferably the latest version but should work for Node 12 and onwards)

-PostgreSQL


## Getting started

Without database:

1. Install dependencies: ``yarn install``
2. Start the server: ``yarn start``
3. Hit the endpoints!

With database
1. Install dependencies: ``yarn install``
2. Standard PostgreSQL config already defined with host=127.0.0.1 and port=5432.
   If you are using different config to this, please update this in src/config.ts
   and src/database/create
4. Update useMockDatabase to 'false' in src/config.ts
3. Create the database: ``yarn db:create``
4. Add users to the users table ``yarn add-users``
5. Start the server: ``yarn start-with-db``
6. Hit the endpoints! 


## Endpoints

The GET endpoints are public and has no auth.

``GET -> /users/:username `` fetch links by username

``GET -> /users/:username?sortBy=dateCreated `` fetch links by username sorted by date created

The POST endpoints below require user authentication (Basic Auth). After the server
verifies the user, it will save the new link and user id to the database.
Authorization header: Basic YWRtaW46YWRtaW4=

``POST -> /links/classic `` create classic link

``POST -> /links/shows-list `` create shows list link

``POST -> /links/music-player `` create music player link


## Tests

Tests can be run by using: ``yarn test``
