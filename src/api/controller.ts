import {Request, Response} from "express";

export const fetchlinkCtrl = async (req: Request, res: Response) => {
    res.send({
        status: 200,
        message: '',
        result: ''
    })
}