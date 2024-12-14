import { Layout, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RootStore,
  setupRootStore,
  RootStoreProvider,
  useStores,
} from "./common";
import { AuthListener } from "./common/component/auth-listener/auth-listener";
import { Spinner } from "./common/component/spinner/spinner";
import { NavHeader } from "./common/navbar";
import { PATHS } from "./config";
import { AppRoutes } from "./routes";
import { Login } from "./screens";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { color } from "./theme";

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
    getItem("Grade Year", "5"),
    getItem("Section Setup", "6"),
  ]),
  getItem("Files", "7", <FileOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  // Setup root store asynchronously
  useEffect(() => {
    (async () => {
      const store = await setupRootStore();
      setRootStore(store);
    })();
  }, []);

  if (!rootStore) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <Layout style={{ height: "100vh", width: "100%" }}>
        <Spinner />
        <ProtectedApp collapsed={collapsed} setCollapsed={setCollapsed} />
      </Layout>
    </RootStoreProvider>
  );
}

function ProtectedApp({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { authStore } = useStores();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Redirect to login if accessToken is null or empty
  useEffect(() => {
    if (!authStore?.accessToken) {
      setIsLoggedIn(false);
      navigate(PATHS.LOGIN.path); // Redirect to login if no token
    } else {
      setIsLoggedIn(true); // AccessToken is available
    }
  }, [authStore?.accessToken, navigate]);

  // if (!isLoggedIn) {
  //   return <Login />;
  // }
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
    <>
      <AuthListener />
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
            <AppRoutes />
          </div>
        </Layout>
      </Layout>
    </>
  );
}
export default App;
