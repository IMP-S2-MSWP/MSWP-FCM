import sequelize from "./index.js";
import { DataTypes, Model, Sequelize } from "sequelize";

export class Rooms extends Model{
    //buffer에 저장하면 binary 형태로 저장이 되기 때문에 json type으로 다시 변환시켜주기 위함
    toJSON(){
        return super.toJSON();
    }

}

Rooms.init(
    {
        sequence : {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey : true
        },

        number : {
            type: DataTypes.STRING(45),
            allowNull : false
        },

        id : {
            type: DataTypes.STRING(20),
            allowNull : false
        },
        

        state : {
            type : DataTypes.CHAR(1),
            allowNull : true
        },

        create_at : {
            type : 'TIMESTAMP',
            defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull : false
        },

        update_at : {
            type : 'TIMESTAMP',
            defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull : false
        },

        expired_at : {
            type : 'TIMESTAMP',
            allowNull : true
        }

    },

    {
        sequelize,
        modelName : "Rooms",
        tableName : "room",
        timestamps : false
    }
)