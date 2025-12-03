/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  // TODO: Replace these with functionality from Auth0
const { user, logout ,isAuthenticated, isLoading } = useAuth0();


  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  function handleLogout() {
    if(isAuthenticated) {
      logout({ returnTo: window.location.origin  })
    }
  }

   return isAuthenticated && (
    <div className= "self-center shadow-lg shadow-black/15 p-10 pt-8 rounded-md m-auto " >
      <img src={user.picture || "https://ui-avatars.com/api/?name=" + user.name}  
      alt={user.name} className="place-self-center rounded-full m-4 "/>
      <h2 className="text-2xl font-bold" >{user.name}</h2>
      <p className="text-gray-500 m-3 " >{user.email}</p>
    <button className="bg-blue-500 text-white p-2 rounded-lg pl-4 pr-4 mt-4" onClick={handleLogout}>Logout</button>    

    </div>
  );
};

export default Profile;
