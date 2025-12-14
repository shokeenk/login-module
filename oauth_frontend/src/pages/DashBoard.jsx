import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

    const {user, logout} = useAuth(); 
        
    const renderUserInfo = () => {
        if (user?.provider === 'google'){
            return(
                <div className="user-details">
                    <div className="user-header">
                        {user?.picture && (
                            <img    
                            src ={user?.picture}
                            alt = "Profile"
                            className="profile-picture"
                            />
            )}
                        <div className="basic-user-info">
                            <h3>{user?.name}</h3>
                            <p className="email">{user?.email}</p>
                            <span className="provider-badge google">Google Account </span>
                        </div>

                    </div>

                </div>
        

            );
        }

        else if (user?.provider === 'github'){
            return(
                <div className="user-details">
                    <div className="user-header">
                        {user?.picture && (
                            <img    
                            src ={user?.picture}
                            alt = "Profile"
                            className="profile-picture"
                            />
            )}
                        <div className="basic-user-info">
                            <h3>{user?.name || user?.username}</h3>
                            <p className="email">{user?.email}/</p>
                            <p className="username">@{user?.username}</p>
                            <span className="provider-badge google">GitHub Account </span>
                        </div>

                    </div>
                    <div className="github-starts">
                        <div className="stat-card">
                            <h4>Public repos</h4>
                            <p>{user?.public_repos || 0}</p>
                        </div>
                        <div className="stat-card">
                            <h4>Followers</h4>
                            <p>{user?.followers || 0 }</p>
                        </div>
                        <div className="stat-card">
                            <h4>{user?.following || 0}</h4>
                        </div>

                    </div>

                    {(user?.bio || user?.company || user?.location) && (
                        <div className="addional-info">
                            {user?.bio &&(
                                <div className="item-info">
                                    <strong>Bio:</strong>{user?.bio}

                                </div>
                            ) 
                            }
                            {user?.company &&(
                                <div className="item-info">
                                    <strong>Company:</strong>{user?.company}

                                </div>
                            ) 
                            }
                            {user?.location &&(
                                <div className="item-info">
                                    <strong>Location:</strong>{user?.location}

                                </div>
                            ) 
                            }

                        </div>
                    )}

                </div>
            );
        }
    }
        return(
            <div className="dashboard-container">
            <div className="dashboard-header">
            <h1>DashBoard</h1>
            <button className="logout-button" onClick={logout}>
            Logout
            </button>
            <div className="user-info">
            <h3>Welcome, {user?.name || user?.username}</h3>
            {renderUserInfo()}
            </div>
            </div>
            </div>
        );
 
    };

    export default Dashboard;


