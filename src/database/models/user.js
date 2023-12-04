import sequelize from "./index.js";
import { DataTypes, Model, Sequelize } from "sequelize";

export class Users extends Model{
    //buffer에 저장하면 binary 형태로 저장이 되기 때문에 json type으로 다시 변환시켜주기 위함
    toJSON(){
        return super.toJSON();
    }

}

Users.init(
    {
        id : {
            type: DataTypes.STRING(20),
            primaryKey : true
        },

        password : {
            type: DataTypes.STRING(60),
            allowNull : false
        },

        name : {
            type: DataTypes.STRING(20),
            allowNull : false
        },
        
        nickname : {
            type: DataTypes.STRING(12),
            allowNull : false,
            unique : true
        },

        birth : {
            type: DataTypes.DATE,
            allowNull : false
        },

        gender : {
            type: DataTypes.CHAR(1),
            allowNull : true
        },

        uuid : {
            type: DataTypes.STRING(50),
            allowNull : true
        },

        image : {
            type : DataTypes.STRING(30),
            allowNull : true
        },

        message : {
            type : DataTypes.STRING(60),
            allowNull : true
        },

        fcm : {
            type : DataTypes.STRING(255),
            allowNull :true
        },
        // create_at : {
        //     type : 'TIMESTAMP',
        //     defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
        //     allowNull : false
        // },

        // update_at : {
        //     type : 'TIMESTAMP',
        //     defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
        //     allowNull : false
        // },

        // expired_at : {
        //     type : 'TIMESTAMP',
        //     allowNull : true
        // }

    },

    {
        sequelize,
        modelName : "Users",
        tableName : "user",
        timestamps : false
    }
)