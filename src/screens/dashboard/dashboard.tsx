import { MainLayout } from "../../common/layout/layout";
import FacultyImg from "../../assets/images/faculties_img.jpg";

export const Dashboard = () => {
  console.log("called");
  return (
    <MainLayout>
      <div style={{ height: "50%" }}>
        <img
          src={FacultyImg} // Replace with your profile picture URL
          alt="Faculties"
          style={{
            width: "100%", // Fit to parent width
            height: "100%", // Fit to parent height
            objectFit: "cover",
          }}
        />
      </div>
    </MainLayout>
  );
};
