import { DoubleRightOutlined } from "@ant-design/icons";
import { Col, Modal } from "antd";
import { useState } from "react";
import { useStores } from "../../../models";
import "./summary-details.css";

import { SummaryProps } from "../props";
import {
  summaryBtnStyle,
  summaryIconStyle,
  summaryModalStyle,
  summaryTitleStyle,
  summaryValueStyle,
} from "../styles";
import { translate } from "../../../i18n";

export const SummaryDetails = (props: SummaryProps) => {
  const { title, value, content, hideModal } = props;
  const { appStateStore } = useStores();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <>
      {!hideModal ? (
        <div>
          <button
            style={summaryBtnStyle}
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            <h3 style={summaryTitleStyle}>
              {title}
              <span style={summaryValueStyle}>{value}</span>
              <span style={summaryIconStyle}>
                <DoubleRightOutlined />
              </span>
            </h3>
          </button>
          <Modal
            className={`summary-modal${
              appStateStore.isDarkMode ? " dark" : ""
            }`}
            centered
            width={"25%"}
            footer={null}
            open={isOpenModal}
            bodyStyle={summaryModalStyle}
            title={translate("common.summary")}
            onCancel={() => setIsOpenModal(false)}
          >
            <Col span={24}>{content}</Col>
          </Modal>
        </div>
      ) : (
        <div>
          <h3>
            {title}
            <span style={summaryValueStyle}>{value}</span>
          </h3>
        </div>
      )}
    </>
  );
};
