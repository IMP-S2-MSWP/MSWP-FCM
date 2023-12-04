import fcmService from "../services/fcmService.js"
const fcmController = {

    notification: async (req, res) => {
        try {
            const response = await fcmService.notification(req.body)
            res.json(response);
        } catch (err) {
            res.json(err);
        }
    },
    updateFcm: async (req,res) => {
        try {
            const response = await fcmService.updateFcm(req.body)
            res.json(response);
        } catch (err) {
            res.json(err);
        }
    }

}

export default fcmController;