import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = []

router.get('/',(req,res)=>{
    console.table(users);
    res.send({users:users});
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const r = req.body;
    const newUser = {...r,id:uuidv4()};
    users.push(newUser);
    res.send({user:newUser});
    console.log(`New user add : `);
    console.table(newUser);
})

router.get('/:id',(req,res)=>{
    
    const {id} = req.params;

    const foundUser = users?.find((user)=>user.id === id);

    console.log(req.params||[]);

    let o = `user with the id ${id} not found`;

    res.send(foundUser || o);
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users?.filter((user)=>user.id !== id);

    res.send(`User with id ${id} deleted!`);

    console.log(`user with id ${id} deleted`);
});

router.patch('/:id',(req,res)=>{
    const {id} = req.params;

    const {name,age} = req.body;
    
    const user = users.find((user)=>user.id === id);

    if(name) user.name = name;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated!`);


    console.log(`User with id updated`);

})

export default router;