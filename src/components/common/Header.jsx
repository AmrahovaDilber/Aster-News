import {  FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import menus from "../../router/menus";
import { router } from "../../utils/helper";

export default function Header() {
menus

  return (
    <header className="py-[15px] flex items-center gap-x-[45px] ">
      <div className="flex w-[390px] bg-[#ECF5F8] pl-[14px] items-center">
        <input
          placeholder="Search for news..."
          type="text"
          className="
              placeholder:text-[#ECF5F8]
                  flex-1 bg-transparent outline-none h-[46px] "
        ></input>
        <span className="text-[18px] size-[46px] inline-flex items-center justify-center">
          <FiSearch></FiSearch>
        </span>
      </div>
      <div className="flex items-center gap-x-[15px]">
        {menus.map((menu, index) => (
          <Link  key={index} to={router(menu.route)} className="gap-x-[8px] px-[10px] h-[46px] flex items-center">
            <span>{menu.icon}</span>
            <span>{menu.name}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
