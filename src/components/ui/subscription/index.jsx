import { FiGift } from "react-icons/fi";
import Button from "../button";

function SubscriptionBox() {
  return (
    <div
      className="p-[20px]
        bg-[#2f9FF8] text-white rounded-[4px]
        "
    >
      <div className="flex items-center whitespace-nowrap gap-x-[15px]">
        <span className="text-[24px]">
          <FiGift></FiGift>
        </span>
        <span>Subscribe to Premium</span>
      </div>
      <div className="flex items-center justify-between mt-[10px]">
        <span className="text-[30px] font-bold">
          $8
          <small className="text-[14px] font-normal">/m</small>
        </span>
        <Button>Upgrade</Button>
      </div>
    </div>
  );
}
export default SubscriptionBox;
