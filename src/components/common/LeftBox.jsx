import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SubscriptionBox from "../ui/subscription";

export default function LeftBox() {
  return (
    <aside className="pr-[17px] ">
      <div>
        <Link className="py-[20px] px-[30px] flex items-center gap-[15px]">
          <img
            src="/logo.png"
            alt="Aster News"
            className="w-[29px] h-[35px]"
          ></img>
          <span>Aster News</span>
        </Link>
      </div>
      <Navbar></Navbar>
      <div className="pl-[17px]">
        <SubscriptionBox></SubscriptionBox>
      </div>
    </aside>
  );
}
