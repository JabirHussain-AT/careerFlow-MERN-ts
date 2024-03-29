import companySignupController from "./companySignup";
import formUpdateController from "./formUpdateController";
import fetchCompaniesController from "./fetchCompanies";
import updateCompanyApprovelController from "./updateApprovel";
import addJobController from "./addJob";
import editJobController from "./editJob";
import fetchComJobController from "./fetchComJobs";
import changeStatusController from "./changeController";
import fetchJobsController from "./fetchJobs";
import fetchJobController from "./fetchJob";
import addCategoryController from "./addCategory";
import fetchCategoriesController from "./fetchCategories";
import findJobsController from "./findjobs";
import jobApplyController from "./jobApply";
import getMyJobApplicationController from "./getMyJobApplication";
import preferedJobsController from "./preferedJobs";
import getJobsAndApplicantsCount from "./getJobsAndApplicants";
import getChartDataController from "./getChartData";
import getChatCompanydataController from "./getChatCompanyData";
import changeJobApplicationStatusController from "./changeJobApplicationStatus";
import getScheduledInterviewController from "./getInterViewSchedule";
import scheduleInterViewController from "./scheduleInterview";
import removeScheduleController from "./removeScheduledInterview";
import removeCategoryController from "./removeCategory";

export default (dependencies: any) => {
  return {
    companySignupController: companySignupController(dependencies),
    formUpdateController: formUpdateController(dependencies),
    fetchCompaniesController: fetchCompaniesController(dependencies),
    updateCompanyApprovelController:
      updateCompanyApprovelController(dependencies),
    addJobController: addJobController(dependencies),
    editJobController: editJobController(dependencies),
    fetchComJobController: fetchComJobController(dependencies),
    changeStatusController: changeStatusController(dependencies),
    fetchJobsController: fetchJobsController(dependencies),
    fetchJobController: fetchJobController(dependencies),
    addCategoryController: addCategoryController(dependencies),
    fetchCategoriesController: fetchCategoriesController(dependencies),
    findJobsController: findJobsController(dependencies),
    preferedJobsController: preferedJobsController(dependencies),
    jobApplyController: jobApplyController(dependencies),
    getMyJobApplicationController: getMyJobApplicationController(dependencies),
    getJobsAndApplicantsCount: getJobsAndApplicantsCount(dependencies),
    changeJobApplicationStatusController:
      changeJobApplicationStatusController(dependencies),
    getChartDataController: getChartDataController(dependencies),
    scheduleInterViewController: scheduleInterViewController(dependencies),
    getChatCompanydataController: getChatCompanydataController(dependencies),
    getScheduledInterviewController:
      getScheduledInterviewController(dependencies),
    removeScheduleController: removeScheduleController(dependencies),
    removeCategoryController: removeCategoryController(dependencies),
  };
};
