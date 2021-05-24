# Smartfons Node.js Express Sqlite API

CRUD Node.js/Express REST API implementation. Sqlite Database  used for data persistency


# Prerequisites

For Windows, Mac, Linux
* Node
* DB Browser for SQL Database client (no necessary to run the project)

# Usage

* Run `npm install` to installl dependencies
* Run `npm start` to start the local server
* Load `http://localhost:3001/api` to test the endpoint. It will display a json result `{"message":"Hola! We are smartfons"}`

# API  Phone Endpoints

## GET /api/phones

Get a list of phones

```json
[
  {
    "id": 1,
    "name": "iPhone 12 Pro Max",
    "manufacturer": "Apple",
    "description": "All-new dual-camera system, impressive video quality and all-day battery life. Available in six colours, buy your new iPhone today.",
    "price": 999,
    "screen": "10",
    "ram": 345,
    "color": "blue,black,silver,red.golden",
    "imageFileName": "https://res.cloudinary.com/ddhmcvtys/image/upload/v1621857093/phones/iphone-xr-nc-64gb-blue-desktop1-Format-488_ji7tce.png",
    "processor": "RAM"
  }
 ]
```

## GET /api/phones/{id}

Get user information by phone id

```json
 {
    "id": 1,
    "name": "iPhone 12 Pro Max",
    "manufacturer": "Apple",
    "description": "All-new dual-camera system, impressive video quality and all-day battery life. Available in six colours, buy your new iPhone today.",
    "price": 999,
    "screen": "10",
    "ram": 345,
    "color": "blue,black,silver,red.golden",
    "imageFileName": "https://res.cloudinary.com/ddhmcvtys/image/upload/v1621857093/phones/iphone-xr-nc-64gb-blue-desktop1-Format-488_ji7tce.png",
    "processor": "RAM"
 }
```

## POST /api/phones/

To create a new phone based on POST data 
```json
 {
    "name": "iPhone 12 Pro Max",
    "manufacturer": "Apple",
    "description": "All-new dual-camera system, impressive video quality and all-day battery life. Available in six colours, buy your new iPhone today.",
    "price": 999,
    "screen": "10",
    "ram": 345,
    "color": "blue,black,silver,red.golden",
    "imageFileName": "https://res.cloudinary.com/ddhmcvtys/image/upload/v1621857093/phones/iphone-xr-nc-64gb-blue-desktop1-Format-488_ji7tce.png",
    "processor": "RAM"
 }
```

## PUT /api/phones/{id}

To update phone data by id, based on POST data
```json
 {
    "name": "iPhone 12 Pro Max new Name",
    "manufacturer": "Apple",
    "description": "All-new dual-camera system, impressive video quality and all-day battery life. Available in six colours, buy your new iPhone today.",
    "price": 999,
    "screen": "10",
    "ram": 345,
    "color": "blue,black,silver,red.golden",
    "imageFileName": "https://res.cloudinary.com/ddhmcvtys/image/upload/v1621857093/phones/iphone-xr-nc-64gb-blue-desktop1-Format-488_ji7tce.png",
    "processor": "RAM"
 }
```
## DELETE /api/phones/{id}
To remove a phone from the database by phone id. 

`{ deletedID:id}`

# API  Phone Phone Feature Endpoints
## GET /api/phoneFeatures
To get phone features with id reference to Phone id

```json
[
   {
      "id":1,
      "name":"Pay as you go option",
      "description":"Phone available  with monthly contract",
      "phoneId":1
   },
   {
      "id":2,
      "name":"Charger replacement",
      "description":"Included",
      "phoneId":1
   },
   {
      "id":3,
      "name":"USB 30",
      "description":"USB 30",
      "phoneId":1
   },
   {
      "id":4,
      "name":"Finance Available",
      "description":"Finance place",
      "phoneId":1
   }
]

```










