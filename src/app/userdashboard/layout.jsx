import Navbar from "./ui/userdashboard/navbar/navbar";
import Sidebar from "./ui/userdashboard/sidebar/sidebar";
import styles from "./ui/userdashboard/dashboard.module.css";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default UserDashboardLayout;
