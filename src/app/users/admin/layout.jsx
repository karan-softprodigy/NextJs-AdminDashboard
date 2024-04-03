import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header")); //lazy loading
// const ComponentC = dynamic(() => import('../components/C'), { ssr: false }) //If you want to disable pre-rendering for a Client Component, you can use the ssr option set to false:

const AdminLayout = ({ children, sidebar }) => {
  return (
    <main>
      <Header />
      {sidebar}
      {children}
    </main>
  );
};

export default AdminLayout;
