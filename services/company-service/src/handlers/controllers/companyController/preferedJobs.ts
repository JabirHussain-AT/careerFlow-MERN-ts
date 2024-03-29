import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../../entities/Interfaces/ICompanyInterface";

export = (dependencies: IDependencies )  => {
  const {
    usecases: { preferedJobs_useCase },
  } = dependencies;


  const preferedJobsController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
       
        const preferedJobs = req.params.preferedJobs.split(',')
        const page = req.params.page 

        const data = await  preferedJobs_useCase(dependencies).interactor(preferedJobs ,page )
        res.json({
            data : data ,
            success : true ,
            message: "fetched prefered jobs  successfully for the job "
        })
    } catch (err) {

      console.log(err, "Error in the fetching prefererd jobs  in the company form controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return preferedJobsController;
};
