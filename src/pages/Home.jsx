import NewsItem from "../components/ui/news-item";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-[20px]">
        <NewsItem></NewsItem>
        <NewsItem></NewsItem>
        
    </div>
    </div>
  );
}
