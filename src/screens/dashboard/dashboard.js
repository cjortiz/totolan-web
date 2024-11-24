import { jsx as _jsx } from "react/jsx-runtime";
import { MainLayout } from "../../common/layout/layout";
import FacultyImg from "../../assets/images/faculties_img.jpg";
export const Dashboard = () => {
    return (_jsx(MainLayout, { children: _jsx("div", { style: { height: "50%" }, children: _jsx("img", { src: FacultyImg, alt: "Faculties", style: {
                    width: "100%", // Fit to parent width
                    height: "100%", // Fit to parent height
                    objectFit: "cover",
                } }) }) }));
};
