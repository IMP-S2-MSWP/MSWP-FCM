import { Sequelize } from "sequelize";
import sequelize from "./models/index.js";
import { Users } from "./models/user.js";

const User = {
    findUserFcm: async (uid) => {
        const user = await Users.findOne({attributes:['fcm'],where:{id: `${uid}`},raw:true});
        return user;
    },
    updateFcm: async (uid,token) => {
        const user = await Users.update({fcm:token},{where:{id:`${uid}`}});
        return user;
    },
    findByUser: async (uid) => {
        const user = await Users.findOne({where:{id:`${uid}`},raw:true});
        return user;
    }
};

export default User;