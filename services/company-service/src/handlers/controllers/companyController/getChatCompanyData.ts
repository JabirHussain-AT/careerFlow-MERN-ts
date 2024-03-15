import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { getChatCompanyData_useCase },
  } = dependencies;

  const getChatCompanyData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyDataContainer = req.body;
      const data = await getChatCompanyData_useCase(dependencies).interactor(companyDataContainer)
      res.json({ success: true, message: "error chat users fetching  ! ", data: data });
    } catch (err: any) {
      console.log(err + "  in the catch of the chatusers in company fetching ");
    }
  };
  return getChatCompanyData;
};