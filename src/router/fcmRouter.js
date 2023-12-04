import  express  from "express"; 
import fcmController from "../controller/fcmController.js"

const router = express.Router();

router.post(
    "/notification",
    fcmController.notification
)

router.post(
    "/updatefcm",
    fcmController.updateFcm
)


export default router;