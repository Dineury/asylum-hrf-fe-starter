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
const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

   return isAuthenticated && (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
