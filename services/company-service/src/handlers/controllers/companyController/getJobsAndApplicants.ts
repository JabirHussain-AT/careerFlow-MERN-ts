import { Request, Response, NextFunction } from "express";

export = (dependencies: any): any => {
  const {
    usecases: { getJobAndApplicantsCount_useCase },
  } = dependencies;

  const getJobsAndApplicantsCount = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyId = req.params.companyId;
      const data = await getJobAndApplicantsCount_useCase(dependencies).interactor(
       companyId
      );

      if (data) {
        res.json({
          success: true,
          data: data,
          message: "sucessfully fetched jobs and applicants count ",
        });
      }
    } catch (err: any) {
      console.log(err, "Error in the user fetching  applicants and job controller");
      res.status(500).json({ error: "Internal Server Error" });
      next();
    }
  };
  return getJobsAndApplicantsCount;
};