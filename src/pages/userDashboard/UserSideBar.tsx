import { Flex, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const UserSideBar = () => {
  const navigate = useNavigate();
  const itemList = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Dashboard",
      route: "/user/dashboard",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "My Bookings",
      route: "/user/dashboard/my-booking",
    },
  ];
  const onClick = (e: any) => {
    const selectedItem = itemList.find((item) => item.key === e.key);
    if (selectedItem && selectedItem.route) {
      navigate(selectedItem.route);
    }
  };
  return (
    <>
      <Flex align="center" justify="center" className="">
        <div className="logo">
          <img className="size-10" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEePhRmUWrDLQtGEd7EI2AQwg-bDD7xJODg&s' alt="" />
        </div>
      </Flex>

      <Menu
        onClick={onClick}
        items={itemList.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
        }))}
        mode="inline"
        // items={itemList}
        defaultSelectedKeys={["1"]}
        className="menu-bar"
      />
    </>
  );
};

export default UserSideBar;