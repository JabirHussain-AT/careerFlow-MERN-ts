import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { fetchComJobs_useCase },
  } = dependencies;


  const fetchComJobController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {
        const companyId = req.params?.id 
        const data = await  fetchComJobs_useCase(dependencies).interactor(companyId)
        res.json({
            data : data ,
            success : true ,
            message: "fetched successfully from the company service"
        })
    } catch (err: any) {

      console.log(err, "Error in the fetching jobs in the company form controller");
      res.status(500).json({ error: "Internal Server Error" });
      next()

    }
  };  

  return fetchComJobController;
};
