import { Sequelize } from "sequelize";

const sequelize = new Sequelize('user_db','user','pass',{
    dialect:'sqlite',
    host:'./data/db.sqlite'
})


export default sequelize;