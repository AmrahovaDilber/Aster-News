import { FiSearch } from "react-icons/fi";

export default function Header() {
  return (
    <header className="py-[15px] ">
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
    </header>
  );
}
