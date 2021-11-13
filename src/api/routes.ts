import express, { Request, Response, NextFunction } from "express";
import { fetchlinkCtrl } from "./controller";
const sware = require('strummer-middleware');

import requestValidator from "../middleware/strummer"
import { fetchLinkSchema } from "./schemas";

const router = express.Router();

// const validator = (req: Request, res: Response, next: NextFunction) => {
//     next()
// }


router.get('/link/:id', [requestValidator(fetchLinkSchema), fetchlinkCtrl]);
router.post('/link', );



export default router;