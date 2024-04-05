import styles from "./sidebar.module.css";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/userdashboard/auth";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/userdashboard",
        icon: <MdDashboard />,
        isActive: true,
      },
      {
        title: "Users",
        path: "/userdashboard/users",
        icon: <MdSupervisedUserCircle />,
        isActive: true,
      },
      {
        title: "Products",
        path: "/userdashboard/products",
        icon: <MdShoppingBag />,
        isActive: false,
      },
      {
        title: "Transactions",
        path: "/userdashboard/transactions",
        icon: <MdAttachMoney />,
        isActive: "pointer-events-none",
        isActive: false,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/userdashboard/revenue",
        icon: <MdWork />,
        isActive: false,
      },
      {
        title: "Reports",
        path: "/userdashboard/reports",
        icon: <MdAnalytics />,
        isActive: false,
      },
      {
        title: "Teams",
        path: "/userdashboard/teams",
        icon: <MdPeople />,
        isActive: false,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/userdashboard/settings",
        icon: <MdOutlineSettings />,
        isActive: false,
      },
      {
        title: "Help",
        path: "/userdashboard/help",
        icon: <MdHelpCenter />,
        isActive: false,
      },
    ],
  },
];

const Sidebar = async () => {
  // const { user } = await auth();
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
          style={{ borderRadius: "5px" }}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{session?.user?.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
        {menuItems?.map((cat) => (
          <li key={cat?.title}>
            <span>{cat?.title}</span>
            {cat?.list?.map((item) => (
              <MenuLink item={item} key={item?.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
