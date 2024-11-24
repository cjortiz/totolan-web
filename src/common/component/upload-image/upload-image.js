import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DeleteFilled } from "@ant-design/icons";
import { Skeleton, Image, Tooltip, Upload } from "antd";
import { imagecontainerBox, skeletonImage, iconContainerView, iconContainer, } from "./upload-image-styles";
import { useState } from "react";
import "./upload-image-style.css";
import { BASE64REGEX, checkFileType } from "./upload-image-validator";
import { ViewMode } from "../../constants";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { TotIcons } from "../../icons/tot-icon";
export const UploadImage = (props) => {
    const { altName, readOnly, currentImage, setCurrentImage, setFormData, viewMode, } = props;
    const { messageStore } = useStores();
    const { showMessage } = messageStore;
    const [id] = useState(`selectImage-${Math.random().toString(36).substr(2, 9)}`);
    // On Upload Image
    const onUploadImage = async (file) => {
        if (!file.type.startsWith("image/")) {
            showMessage("error", translate("errorMessage.invalidImageType"));
        }
        else if (file.size > 2097152) {
            showMessage("error", translate("errorMessage.invalidImageSize"));
        }
        else if (!checkFileType(file.type)) {
            showMessage("error", translate("errorMessage.invalidImageType"));
        }
        else {
            const base64String = await convertToBase64(file);
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
        }
        else {
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
    const convertToBase64 = (file) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
    });
    return (_jsxs("div", { className: "image-container", style: imagecontainerBox, children: [currentImage === null ? (_jsx(Skeleton.Image, { className: "skeleton-image", style: skeletonImage, active: false })) : (_jsx(Image, { alt: altName, src: BASE64REGEX.test(currentImage)
                    ? `data:image/jpeg;base64,${currentImage}`
                    : currentImage })), readOnly ? (_jsx("div", { className: "iconContainer", style: iconContainerView })) : (_jsxs("div", { className: "iconContainer", style: iconContainer, children: [_jsx(Upload, { accept: "image/*", beforeUpload: onUploadImage, showUploadList: false, maxCount: 1, children: _jsx(Tooltip, { title: translate("common.upload"), children: _jsx("label", { htmlFor: id, className: "camera-icon", children: _jsx(TotIcons.Camera, {}) }) }) }), currentImage && (_jsxs(_Fragment, { children: [_jsx("div", { className: "vertical-line" }), _jsx(Tooltip, { title: translate("common.delete"), children: _jsx("label", { htmlFor: id, className: "delete-icon", children: _jsx(DeleteFilled, { onClick: onDeleteImage }) }) })] }))] }))] }));
};
