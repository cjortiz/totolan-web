import { Layout, Menu, MenuProps, theme } from "antd";
import "./App.css";
import { AppRoutes } from "./routes";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Header, Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { NavHeader } from "./common/navbar";
import { useNavigate } from "react-router-dom";
import { PATHS } from "./config/paths";
import { RootStore, RootStoreProvider, setupRootStore } from "./common";

// const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Student Setup", "sub1", <UserOutlined />, [
    getItem("Section", "3"),
    getItem("Grades", "4"),
  ]),
  getItem("Teacher Setup", "sub2", <TeamOutlined />, [
    getItem("Edit Grades", "5"),
    getItem("Section Assignment", "6"),
  ]),
  getItem("Files", "7", <FileOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);
  // Kick off initial async loading actions, like loading fonts and RootStore

  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore);
    })();
  }, []);

  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
      default:
        break;
    }
  };

  if (!rootStore) return <div>Loading...</div>;

  return (
    <RootStoreProvider value={rootStore}>
      <Layout style={{ minHeight: "100vh", width: "100%" }}>
        {/* Include the new header component here */}
        <Layout>
          <Sider
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
            collapsed={collapsed}
          >
            <div
              style={{ padding: "16px", textAlign: "center", color: "#fff" }}
            >
              <img
                src="https://via.placeholder.com/40" // Replace with your profile picture URL
                alt="Profile"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
              <div style={{ marginTop: "8px", fontSize: "16px" }}>
                User Name
              </div>
            </div>{" "}
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              onClick={({ key }) => handleMenuClick(key)}
            />
          </Sider>
          <Layout>
            <NavHeader />

            <Content style={{ margin: "0 16px" }}>
              <div
                style={{
                  height: "76vh",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <AppRoutes />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Totalan Learning Management ©{new Date().getFullYear()} Created by
              BISU
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </RootStoreProvider>
  );
}

export default App;
