import admin from "firebase-admin"
import dotenv from "dotenv";
import serviceAccount from "../admin.json" assert { type: "json" }
import User from "../database/User.js";
import Room from "../database/Room.js";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
dotenv.config()
const fcmService = {

    notification: async (body) => {
        const response = await Room.findRoomList(body.to,body.id);
        const userList = response.map(user => user.id);
        console.log(userList)
        for (var i = 0; i< userList.length; i++) {
            const userFcm = await User.findUserFcm(userList[i])
            console.log(userFcm)
            if (userFcm.fcm){
                let message = {
                    notification: {
                        title: body.nickname + "사용자",
                        body: body.message,
                    },
                    token: userFcm.fcm
                }
                console.log(userFcm.fcm)
                try{
                    await admin.messaging().send(message);
                    await Room.updateTime(body.to)
                    console.log("성공")
                    return {sc:200}
                }catch(err){
                    return {sc:400}
                }

            }
            else{
                return {"sc":400}
            }
        }


    },
    updateFcm: async (body) => {
        console.log(body)
        const user = await User.findByUser(body.id)
        if ( user ){
            try{
                const updateToken = await User.updateFcm(body.id,body.token)
                return {"sc":200}
            }
            catch (err){
                return {"sc":400}
            }
        }else{
            return {"sc":"400"}
        }
    }
}
export default fcmService