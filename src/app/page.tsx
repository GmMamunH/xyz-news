type NewsItem = {
  id: string; // অথবা number, যদি ID সংখ্যা হয়
  title: string;
  category: string;
};

async function getNews(): Promise<NewsItem[]> {
  const res = await fetch("https://news-api-seven-ivory.vercel.app/api/news");
  return res.json();
}

export default async function HomePage() {
  const news: NewsItem[] = await getNews();

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((item: NewsItem) => (
          <li key={item.id}>
            {item.title} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
