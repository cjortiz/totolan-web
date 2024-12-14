import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../config/paths";
import { color } from "../../theme";
import TotolanIcon from "../../assets/images/totolan_icon.png";
import {
  FormItemFieldType,
  SiriusTypography,
  TotFormItem,
  translate,
  useStores,
} from "../../common";
import { useEffect, useState } from "react";
import "./login.css";
import SiriusButton from "../../common/component/button/tot-button";
import { login } from "./login-operations";
import { LoginInputValue, LoginInterface } from "./login.props";
import { observer } from "mobx-react-lite";

interface LoginDetailsInterface {
  userName: string;
  password: string;
}

export const Login = observer(() => {
  const { authStore, messageStore, appStateStore } = useStores();
  const { showMessage } = messageStore;
  const { setLoading } = appStateStore;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loginDetails, setLoginDetails] = useState<LoginDetailsInterface>();

  const onFinishHandler = (data: LoginInputValue) => {
    login(data, showMessage, setLoading).then((data: LoginInterface) => {
      if (data) {
        console.log(data);
        authStore.setAuthCredentials(data);

        if (!data.token) {
          showMessage("error", translate("errorMessage.incorrectCredentials"));
        } else {
          authStore.setLoggedIn(data.token ? true : false);
        }
      }
    });
  };

  const setDataHandler = (newProperties: object) => {
    setLoginDetails({ ...loginDetails, ...newProperties });
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#143568 30%, #3867a8 60%, #7ab3e6 100%)",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "35%",
          display: "flex",
          padding: 30,
          flexDirection: "column",
          height: "60%",
          background:
            "linear-gradient(135deg,#143568 30%, #3867a8 60%, #7ab3e6 100%)",
          backgroundClip: "padding-box", // Ensures the gradient applies inside the bo
          borderRadius: 20,
          opacity: 0.85, // Adds subtle transparency

          boxShadow:
            " 0px 4px 10px rgba(20, 53, 104, 0.4), 0px 8px 20px rgba(56, 103, 168, 0.3), 0px 12px 30px rgba(122, 179, 230, 0.2)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={TotolanIcon} // Replace with your profile picture URL
            alt="Icon"
            style={{
              width: "5rem", // Fit to parent width
              height: "5rem", // Fit to parent height
              borderRadius: "50%", // Maintain the border radius
              objectFit: "cover", // Cover the div while maintaining aspect ratio
            }}
          />
          <div
            style={{
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SiriusTypography.BodyLarge color={color.white10}>
              Learning Management System
            </SiriusTypography.BodyLarge>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "60%" }}>
            <SiriusTypography.BodyLarge color={color.white10}>
              Login to your account
            </SiriusTypography.BodyLarge>
            <Form layout="vertical" form={form} onFinish={onFinishHandler}>
              <Form.Item name={"userName"} style={{ marginTop: 20 }}>
                <Input
                  type="text"
                  className="login-input"
                  placeholder="Username"
                  onPressEnter={() => form.submit()}
                />
              </Form.Item>
              <Form.Item name={"password"} style={{ marginTop: 30 }}>
                <Input
                  type="password"
                  className="login-input"
                  placeholder="Password"
                  onPressEnter={() => form.submit()}
                />
              </Form.Item>
            </Form>
            <div
              style={{
                marginTop: 20,
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button className="login-button" onClick={() => form.submit()}>
                <SiriusTypography.BodySmall color={color.white10}>
                  Login
                </SiriusTypography.BodySmall>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
