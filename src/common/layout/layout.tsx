import "./layout.css";
interface MainLayoutProps {
  children: React.ReactNode;
  isFlex?: boolean;
}
export const MainLayout = (props: MainLayoutProps) => {
  const { children, isFlex } = props;
  return (
    <div className={`main-layout-container ${isFlex ? "flex" : ""} `}>
      {children}
    </div>
  );
};
