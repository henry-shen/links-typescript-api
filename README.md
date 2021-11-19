# Links API

## What's required to run this API

-NodeJS (preferably the latest version but should work for Node 12 and onwards)

-PostgreSQL (not required, see below)


## Getting started

Without database:

1. Install dependencies: ``yarn install``
2. Start the server: ``yarn start``
3. Hit the endpoints!

With database:

1. Install dependencies: ``yarn install``
2. Default PostgreSQL config already defined with host=127.0.0.1 and port=5432.
   If you are using different config to this, please update this in src/config.ts
   and src/database/create
3. Update useMockDatabase to 'false' in src/config.ts
4. Create the database: ``yarn db:create``
5. Add users to the user table: ``yarn add-users``
6. Start the server: ``yarn start-with-db``
7. Hit the endpoints! 


## Endpoints

The GET endpoints are public and has no auth.

``GET -> /users/:username `` fetch links by username

``GET -> /users/:username?sortBy=dateCreated `` fetch links by username sorted by date created

The POST endpoints below require Basic authorization in the Authorization header.
Refer to Authentication section below for more details.
After the server authenticates the user, it will save the new link and the userId to the database.

``POST -> /links/classic`` create classic link

``POST -> /links/shows-list`` create shows list link

``POST -> /links/music-player`` create music player link

## Authentication

Basic Auth. Example below.

Example user has username: `admin` and password: ``admin``

Base64Encoded(userame:password): ``YWRtaW46YWRtaW4=``

Include in the request headers: ``Authorization=Basic YWRtaW46YWRtaW4=``


## Tests

Tests can be run by using: ``yarn test``
