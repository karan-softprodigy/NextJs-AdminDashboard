const Template = ({ children }) => {
  return <div>{children}</div>;
};

export default Template;
// Layout and Template files used for same thing. But difference between both of them is that when we use layout.js file then only that partucular component will will be render its related component will not re-render. But in case of template its related components ad=nd state gets re-rendered or gets reset.
