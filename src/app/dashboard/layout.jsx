const DashboardLayout = ({ children, recentBlogs, newUsers, login }) => {
  const isAuthenticated = true;

  return (
    <main>
      {isAuthenticated ? (
        <div>
          {children}
          <div className="flex justify-around">
            {newUsers}
            {recentBlogs}
          </div>
        </div>
      ) : (
        login
      )}
    </main>
  );
};

export default DashboardLayout;
