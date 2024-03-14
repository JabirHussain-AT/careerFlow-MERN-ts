export const fetchUser_useCase = (dependencies: any): any => {
    const {
      repositories: {
        userRepo: { fetchUser },
      },
    } = dependencies;
  
  if(!fetchUser) throw new Error('repository is required  !')
  const interactor = async ( userId  )=>{
      return await fetchUser(userId)
   }
   return {interactor}
  };
  