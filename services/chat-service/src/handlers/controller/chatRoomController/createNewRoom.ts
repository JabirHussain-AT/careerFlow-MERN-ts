import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { chatUseCases :{
      creatNewRoom_useCase
    } },
  } = dependencies;

  const createNewRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
     
      const roomDetials = req.body 
      const data  = await creatNewRoom_useCase(dependencies).interactor(roomDetials)
  
      res.json({
        data : data , 
        success : true ,
        message : 'room created or existing room taken fetched'
      })

    } catch (err: any) {
      console.log(err, "error in the create new room chat service");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };

  return createNewRoom;
};