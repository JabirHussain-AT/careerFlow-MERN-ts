import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../../../util/errorHandlers/errorResponse";

export = (dependencies: any): any => {
  const {
    usecases: { updateBasicDetials_useCase },
  } = dependencies;

  const updateBasicDetialsController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log(req.body, " FROM badic detials  update");
      let userId = req.body._id;
      let dataToUpdate = {
        location : req.body.location ,
        position : req.body.position ,
        dob : req.body.dob ,
        phoneNumber : req.body.phoneNumber ,
        basicInfoUpdated : true 

      }

      const data = await updateBasicDetials_useCase(dependencies).interactor(
        userId,
        dataToUpdate
      );

      if (data !== false) {
        res.json({
          success: true,
          data: data,
          message: " successfully updated",
        });
      } else {
        return next(
          ErrorResponse.forbidden(
            "Issue in updating profile basic detieals , please try again later "
          )
        );
      }
    } catch (err: any) {
      console.log(err + "  in the catch of the  profile basic detieals update controller ");
      next();
    }
  };
  return updateBasicDetialsController;
};
