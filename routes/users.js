import express from "express";

import sequelize from "../data/database.js";

import User from "../data/User.js";

sequelize.sync().then(() => {
    console.log("Database synced successfully");
});

const router = express.Router();

let users = [];

router.get("/", async (req, res) => {
    console.table(users);
    users = await User.findAll();

    res.status(200).send({ users: users });
});

router.post("/", async (req, res) => {
    //   console.log(req.body);
    //   const r = req.body;
    //   const newUser = { ...r, id: uuidv4() };
    //   users.push(newUser);

    console.log(req.body);

    await User.create(req.body);
    res.status(201).send({ user: req.body ,message:'user created successfully!'});
    console.log(`New user add : `);
    console.table(req.body);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    //   const foundUser = users?.find((user) => user.id === id);

    //   const foundUser = await User.findOne({where:{id:id}});
    const foundUser = await User.findByPk(id);

    console.log(req.params || []);

    let o = `user with the id ${id} not found`;

    res.status(200).send(foundUser || { error: o });
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    //   users = users?.filter((user) => user.id !== id);

    users = await User.destroy({ where: { id: id } });

    if (users) {
        res.status(404).send({ msg: `User with id ${id} deleted!` });
    } else {
        res.status(404).send(`User with id ${id} not found !`);
    }
});

router.patch("/:id", async (req, res) => {
    const { id } = req.params;

    const { name, age } = req.body;

    //   const user = users.find((user) => user.id === id);

    const user = await User.findOne({ where: { id: id } });

    if (user) {
        if (name) user.name = name;
        if (age) user.age = age;

        await user.save();
        res.send({ msg: `User with the id ${id} has been updated!`, user: user });
    } else {
        res.send({ error: `User with the id ${id} has not been found !` });
    }

    console.log(`User with id updated`);
});

export default router;
