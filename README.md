# nodejs-and-express-crud

## How to execute

install dependencies

navigate to the folder

```
cd nodejs-and-express-crud/
```

install the dependecies with
```
npm install --save
```

## run with

```
npm start
```

## Routes
- GET `http://localhost:5000/users` to view all the users
- GET `http://localhost:5000/users/:id` to view a user
- POST `http://localhost:5000/users` to add a user
- DELETE `http://localhost:5000/users/:id` to delete a user
- PATCH `http://localhost:5000/users/:id` to update a user

Post Data should be like 
```json
{
    "user":"<username>",
    "age":"user-age"
}
``` 