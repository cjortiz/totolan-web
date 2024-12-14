import { Layout, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../config";
import Sider from "antd/es/layout/Sider";
import { NavHeader } from "../../common/navbar";
import { AppRoutes } from "../../routes";
import { color } from "../../theme";
import { useState } from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { observer } from "mobx-react-lite";

type MenuItem = Required<MenuProps>["items"][number];

export const Main = observer(({ children }: any) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  };

  const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("Student Setup", "sub1", <UserOutlined />, [
      getItem("Section", "3"),
      getItem("Grades", "4"),
    ]),
    getItem("Teacher Setup", "sub2", <TeamOutlined />, [
      getItem("Grade Year", "5"),
      getItem("Section Setup", "6"),
    ]),
    getItem("Files", "7", <FileOutlined />),
  ];

  const handleMenuClick = (key: string) => {
    switch (key) {
      case "1":
        navigate("/path1"); // Replace with the actual path
        break;
      case "2":
        navigate("/path2"); // Replace with the actual path
        break;
      case "3":
        // navigate(PATHS.GRADES.path); // Replace with the actual path
        break;
      case "4":
        navigate(PATHS.Students.path);
        break;
      case "5":
        navigate(PATHS.GradeYearSetup.path);
        break;
      case "6":
        navigate(PATHS.SectionSetup.path);

        break;
      default:
        break;
    }
  };
  return (
    <Layout style={{ height: "100vh", width: "100%" }}>
      <NavHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Sider
          onMouseEnter={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
          collapsed={collapsed}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                onClick={({ key }) => handleMenuClick(key)}
              />
            </div>
            <div
              style={{
                padding: "16px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <img
                src="https://via.placeholder.com/40" // Replace with your profile picture URL
                alt="Profile"
                style={{
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                }}
              />
              <div style={{ marginTop: "8px", fontSize: "16px" }}>
                User Name
              </div>
            </div>
          </div>
        </Sider>
        <Layout>
          <div
            style={{
              height: "100%",
              background: color.secondary01,
            }}
          >
            {children}
            {/* <AppRoutes /> */}
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
});
