const Profile = () => {
    const token = Cookies.get('token');
    if (!token) {
      // The user is not logged in, redirect to the login page
      history.push('/login');
    }
    // The user is logged in, show the profile information
    return (
      <div>
        <h1>Welcome to your profile</h1>
      </div>
    );
  };