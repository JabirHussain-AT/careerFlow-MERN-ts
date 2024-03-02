import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { findJobs_useCase },
  } = dependencies;


  const findJobs = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
        const jobsDocs = req.body
        console.log(jobsDocs , 'this is job conditions ')
    
        const data = await  findJobs_useCase(dependencies).interactor(jobsDocs)
        res.json({
            data : data ,
            success : true ,
            message: "fetched successfully from the job db"
        })
    } catch (err: any) {

      console.log(err, "Error in the finding jobs  in the company form controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return findJobs;
};