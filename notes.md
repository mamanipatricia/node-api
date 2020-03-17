


- express
- dotenv = allow to create what are called enviroment variables and can put them inside of a single config ile which is very helpful.
df

### installations
```
npm i express dotenv
npm i -D nodemon
```

----------
To run de server:

```
npm run dev
```
### ROUTE STRUCTURE:

![route Structure](./images/routesStructure.png)

<!-- LOGGER -->
- express.js  morgan middleware
```
npm i morgan
```

### MongoDB

On console type:
```
sudo systemctl start mongodb.service
mongod
mongo
```

Mongo Atlas = cloud database
- it could be installed locally

MongoDB Compass = local database
- to connect to remote DB or local DB

Installing mongoose:
```
npm i mongoose
```

Installing Colors:
```
npm i colors
```
MONGO ATLAS:
```
MONGO_URI=mongodb+srv://patty:patty@bootcamper-lyhpg.mongodb.net/devcamper?retryWrites=true&w=majority
```

MONGO LOCAL- compass:
```
MONGO_URI=mongodb://localhost:27017/devcamper
```
----------

Get all collections names:
```
db.getCollectionInfos({ name: "accounts" });
```

Show all data from a collection:
```
db.bootcamps.find().pretty()
```

## SLUGIFY
```
npm i slugify
```

