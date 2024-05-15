import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"


const UserProfilePage = () => {
  const {currentUser,isLoading:isGetLoading}=useGetMyUser();
  const {updateUser,isLoading:isUpdateLoading}=useUpdateMyUser();
  if(isGetLoading){
    return <span>Loading...</span>
  }
  if(!currentUser){
    return <span>Unable to load user profile</span>
  }

  return (
   <UserProfileForm onSave={updateUser} currentUser={currentUser} isLoading={isUpdateLoading}/>
  )
}

export default UserProfilePage
