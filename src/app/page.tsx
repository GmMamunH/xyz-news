async function getNews() {
  const res = await fetch("https://news-api-seven-ivory.vercel.app/api/news");
  return res.json();
}
export default async function HomePage() {
  const news = await getNews();
  return (
    <>
      <div>
        <h1>Latest News</h1>
        <ul>
          {news.map((item: any) => (
            <li key={item.id}>
              {item.title} - {item.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
