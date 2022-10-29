import {Model,DataTypes} from 'sequelize';

import sequelize from './database.js';

class User extends Model { }


User.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{sequelize,modelName:'user'});

export default User;
