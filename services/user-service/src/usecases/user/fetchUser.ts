import { IDependencies } from "../../entities/intrefaces/IUserInterfaces";

export const fetchUser_useCase = (dependencies: IDependencies) => {
  const {
    repositories: {
      userRepo: { fetchUser },
    },
  } = dependencies;

  if (!fetchUser) throw new Error("repository is required  !");
  const interactor = async (userId : string ) => {
    return await fetchUser(userId);
  };
  return { interactor };
};
