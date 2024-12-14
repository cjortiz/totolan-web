import "./navbar.css";
import TotolanIcon from "../../assets/images/totolan_icon.png";
import { Button, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../config/paths";
import { color } from "../../theme";

interface NavHeaderProps {
  collapsed: boolean;
  setCollapsed: (arg: boolean) => void;
}

export const NavHeader = (props: NavHeaderProps) => {
  const { collapsed, setCollapsed } = props;
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const option = [];
  //     Object.keys(PATHS)
  //       .sort()
  //       .forEach((key, i) => {
  //         const found = resources.find((obj) => {
  //           return obj.resourceId === PATHS[key].resourceId;
  //         });

  //         if (found || PATHS[key].resourceId === RESOURCE_ENABLED) {
  //             option.push({
  //             key: PATHS[key].path,
  //             value: PATHS[key].label,
  //           });
  //         }
  //       });
  //     setOptions(option);
  //   }, [resources]);

  return (
    <div className="header-container">
      <div
        style={{
          width: "5%",
          height: "100%",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Button
          type="text"
          onClick={() => setCollapsed(!collapsed)}
          style={{ width: "80%", height: "80%" }}
          icon={<MenuOutlined color={color.gray07} />}
        ></Button>
      </div>
      <div
        style={{
          width: "5rem",
          height: "5rem",
          marginRight: "20px",
          display: "flex", // Optional: Aligns the content inside the div
          justifyContent: "center", // Optional: Centers the content horizontally
          alignItems: "center", // Optional: Centers the content vertically
        }}
      >
        <img
          onClick={() => navigate(PATHS.DASHBOARD.path)}
          src={TotolanIcon} // Replace with your profile picture URL
          alt="Icon"
          style={{
            width: "5rem", // Fit to parent width
            height: "5rem", // Fit to parent height
            borderRadius: "50%", // Maintain the border radius
            objectFit: "cover", // Cover the div while maintaining aspect ratio
          }}
        />
      </div>
      <div
        style={{
          width: "30%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            alignItems: "end",
          }}
        >
          <Typography.Text
            style={{ fontSize: "1rem", fontWeight: "bold", color: "#00008b" }}
          >
            TOTOLAN ELEMENTARY SCHOOL
          </Typography.Text>
        </div>
        <div style={{ position: "relative", width: "100%", height: "50%" }}>
          <Typography.Text style={{ fontSize: ".8rem", fontWeight: 500 }}>
            LEARNING MANAGEMENT SYSTEM
          </Typography.Text>
        </div>
      </div>
      {/* <div
        style={{
          height: "100%",
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "end",
          paddingRight: "1%",
        }}
      >
        <AutoComplete
          ref={input}
          autoFocus
          style={{ height: "2.5rem", width: "50%", borderRadius: 20 }}
          options={options}
          filterOption={(inputValue, option) =>
            option?.value?.toUpperCase().indexOf(inputValue.toUpperCase()) !==
            -1
          }
          value={searchValue}
          onSelect={(e) => {
            if (e) {
              const path = options.find((value) => value.value === e);
              //   navigate(path.key);
              setShowSearch(false);
              setsearchValue("");
            }
          }}
          onChange={(e) => {
            setsearchValue(e);
          }}
        >
          <Input
            style={{ height: "2.5rem", width: "100%", borderRadius: 20 }}
            prefix={<SearchOutlined />}
            placeholder="Search"
          />
        </AutoComplete>

        {/* <Tooltip title="Search Function">
          <div
            className={`nav-search-container ${showSearch ? "expand" : ""}`}
            onClick={() => {
              if (!showSearch) {
                toggleShowSearch();
              }
              setQuickAccessToolTip(false);
            }}
            onMouseEnter={() => {
              if (!showSearch) {
                setQuickAccessToolTip(true);
              }
            }}
            onMouseLeave={() => {
              setQuickAccessToolTip(false);
            }}
          >
            <AutoComplete
              ref={input}
              autoFocus
              className={`nav-search-box ${showSearch ? "show" : ""}`}
              options={options}
              filterOption={(inputValue, option) =>
                option?.value
                  ?.toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
              value={searchValue}
              onSelect={(e) => {
                if (e) {
                  const path = options.find((value) => value.value === e);
                //   navigate(path.key);    
                  setShowSearch(false);
                  setsearchValue("");
                }
              }}
              onChange={(e) => {
                setsearchValue(e);
              }}
            >
              <Input
                autoFocus
                allowClear
                prefix={<SearchOutlined />}
                suffix={
                  <div
                    className="sirius-clear"
                    onClick={() => {
                      input.current.blur();
                      searchValue === "" && showSearch
                        ? toggleShowSearch()
                        : searchValue !== "" && showSearch
                        ? handleClear()
                        : null;
                    }}
                  >
                    <CloseOutlined
                      className="sirius-navbar-close"
                      width={"1.5rem"}
                      height={"1.5rem"}
                    />
                  </div>
                }
                bordered={false}
                placeholder="Search"
                onBlur={() => {
                  if (searchValue !== "" && !showSearch) {
                    handleClear();
                  } else if (searchValue === "" && showSearch) {
                    toggleShowSearch();
                  }
                }}
              />
            </AutoComplete>
          </div>
        </Tooltip> */}
      {/* </div> */}
    </div>
  );
};
