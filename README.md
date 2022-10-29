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

`http://localhost:5000/users`

## Response

```json
{
    "users": [
        {
            "id": 1,
            "name": "ivantom",
            "age": 10,
            "createdAt": "2022-10-29T21:43:37.588Z",
            "updatedAt": "2022-10-29T21:43:37.588Z"
        },
        {
            "id": 3,
            "name": "test_user",
            "age": 14,
            "createdAt": "2022-10-29T21:45:56.111Z",
            "updatedAt": "2022-10-29T21:56:16.320Z"
        }
    ]
}
```

- GET `http://localhost:5000/users/:id` to view a user

## Example 
`http://localhost:5000/users/1`

## Response

```json
{
    "id": 1,
    "name": "ivantom",
    "age": 10,
    "createdAt": "2022-10-29T21:43:37.588Z",
    "updatedAt": "2022-10-29T21:43:37.588Z"
}
```

- POST `http://localhost:5000/users` to add a user

`http://localhost:5000/users`
## input

```json
{
    "name":"tom",
    "age":19
}
```

## Response

```json
{
    "user": {
        "name": "tom",
        "age": 19
    },
    "message": "user created successfully!"
}
```

- DELETE `http://localhost:5000/users/:id` to delete a user

## Example

`http://localhost:5000/users/5`

## Response

```json
{
    "msg": "User with id 5 deleted!"
}
```

- PATCH `http://localhost:5000/users/:id` to update a user

## Example 

`http://localhost:5000/users/3`

form data

```json
{

    "name":"test_user",
    "age":19
}
```

## Response

```json
{
    "msg": "User with the id 3 has been updated!",
    "user": {
        "id": 3,
        "name": "test_user",
        "age": 19,
        "createdAt": "2022-10-29T21:45:56.111Z",
        "updatedAt": "2022-10-29T21:56:16.320Z"
    }
}
```
