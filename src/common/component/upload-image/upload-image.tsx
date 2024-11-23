import { CameraFilled, DeleteFilled } from "@ant-design/icons";
import { Skeleton, Image, Tooltip, Upload } from "antd";
import {
  imagecontainerBox,
  skeletonImage,
  iconContainerView,
  iconContainer,
} from "./upload-image-styles";
import { useState } from "react";
import "./upload-image-style.css";
import { BASE64REGEX, checkFileType } from "./upload-image-validator";
import { ViewMode } from "../../constants";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { TotIcons } from "../../icons/tot-icon";

interface CurrentImage {
  imageName: string;
  isUploaded: boolean;
  image: string;
}

interface UploadImageProps {
  altName?: string | undefined;
  readOnly: boolean;
  viewMode?: ViewMode;
  currentImage: string | null;
  setFormData: (data: CurrentImage) => void;
  setCurrentImage: (data: CurrentImage) => void;
}

export const UploadImage = (props: UploadImageProps) => {
  const {
    altName,
    readOnly,
    currentImage,
    setCurrentImage,
    setFormData,
    viewMode,
  } = props;

  const { messageStore } = useStores();
  const { showMessage } = messageStore;

  const [id] = useState(
    `selectImage-${Math.random().toString(36).substr(2, 9)}`
  );

  // On Upload Image
  const onUploadImage = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      showMessage("error", translate("errorMessage.invalidImageType"));
    } else if (file.size > 2097152) {
      showMessage("error", translate("errorMessage.invalidImageSize"));
    } else if (!checkFileType(file.type)) {
      showMessage("error", translate("errorMessage.invalidImageType"));
    } else {
      const base64String: string = await convertToBase64(file);
      setCurrentImage({
        isUploaded: true,
        image: base64String,
        imageName: file.name.toString(),
      });
      setFormData({
        isUploaded: true,
        image: base64String,
        imageName: file.name.toString(),
      });
    }

    return false;
  };

  // On Delete Image
  const onDeleteImage = () => {
    if (viewMode === ViewMode.EDIT) {
      setFormData({
        isUploaded: true,
        imageName: undefined,
        image: undefined,
      });
      setCurrentImage({
        isUploaded: true,
        image: undefined,
        imageName: undefined,
      });
    } else {
      setFormData({
        isUploaded: false,
        image: undefined,
        imageName: undefined,
      });
      setCurrentImage({
        isUploaded: false,
        image: undefined,
        imageName: undefined,
      });
    }
  };

  // convert file into base 64
  const convertToBase64 = (file: File) =>
    new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
    });

  return (
    <div className="image-container" style={imagecontainerBox}>
      {currentImage === null ? (
        <Skeleton.Image
          className="skeleton-image"
          style={skeletonImage}
          active={false}
        />
      ) : (
        <Image
    
          alt={altName}
          src={
            BASE64REGEX.test(currentImage)
              ? `data:image/jpeg;base64,${currentImage}`
              : currentImage
          }
        />
      )}
      {readOnly ? (
        <div className="iconContainer" style={iconContainerView}></div>
      ) : (
        <div
          className="iconContainer"
          style={iconContainer}
        >
          <Upload
            accept="image/*"
            beforeUpload={onUploadImage}
            showUploadList={false}
            maxCount={1}
          >
            <Tooltip title={translate("common.upload")}>
              <label htmlFor={id} className="camera-icon">
                <TotIcons.Camera />
              </label>
            </Tooltip>
          </Upload>
          {currentImage && (
            <>
              <div className="vertical-line"></div>
              <Tooltip title={translate("common.delete")}>
                <label htmlFor={id} className="delete-icon">
                  <DeleteFilled onClick={onDeleteImage} />
                </label>
              </Tooltip>
            </>
          )}
        </div>
      )}
    </div>
  );
};
