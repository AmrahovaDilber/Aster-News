import { FiPocket, FiShare } from "react-icons/fi";

function NewsItem() {
  return (
    <article className="p-[17px] bg-white shadow-lg rounded-lg">
   <div className="flex gap-x-[18px]">
  <div>
    <h4 className="text-[17px] font-semibold mb-[9px] line-clamp-2">
      Battlegrounds Mobile India iOS release date
    </h4>
    <p className="line-clamp-4 text-[#6A8193] text-[14px] leading-[22px]">
      The reason behind their disappointment is that iPhone users have been..
    </p>
  </div>
  <figure className="w-[134px] h-[134px] flex-shrink-0">
    <img src="/img.jpeg" className="w-full h-full object-cover" />
  </figure>
</div>

      <div className="pt-[20px] flex items-center justify-between">
        <div className="flex gap-x-[10px]  items-center text-[#9CABB7]">
          <span>Radar52</span>
          <span className="">●</span>
          <span>1 hour ago</span>
        </div>
        <div className="flex items-center gap-x-[25px]">
          <button className="flex items-center gap-x-[8px]">
            <span>
              <FiShare></FiShare>
            </span>
            <span>Share</span>
          </button>

          <button className="flex items-center gap-x-[8px]">
            <span>
              <FiPocket></FiPocket>
            </span>
            <span>Read Later</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default NewsItem;
