import LeftBox from "../components/common/LeftBox";
import RightBox from "../components/common/RightBox";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function AppLayout({ children }) {
  return (
    <div className="grid gap-x-[45px] grid-cols-[260px_1fr_285px]">
      <LeftBox></LeftBox>
      <div>
        <Header></Header>
        <div> {children}</div>
        <Footer></Footer>
      </div>
      <RightBox></RightBox>
    </div>
  );
}
export default AppLayout;
