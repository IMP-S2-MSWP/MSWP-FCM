import { Sequelize } from "sequelize";
import sequelize from "./models/index.js";
import { Rooms } from "./models/room.js";

const Room = {
    findRoomList: async (number,uid) => {
        const user = await Rooms.findAll({attributes:['id'], where:{number: `${number}`, id:{[Sequelize.Op.ne]:uid}},raw:true});
        return user
    },
    updateTime: async (number) => {
        const room =await Rooms.update({update_at : Sequelize.literal("NOW()")}, {where : {number : `${number}`}})
        return room
    }
        
    
};

export default Room;