import "../styles/NewsList.scss";
import NewItem from "./NewItem";
// import callApi from "../services/Api";
import news from "../data/data.json";
// import { useEffect, useState } from "react";

function NewsList() {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     callApi.then((data) => {
//       setNewsData(data);
//     });
//   }, []);
console.log(news)
  const dataHtml = news.map((eachNews) => {
    return <NewItem eachNews={eachNews} key={eachNews.id} />;
  });
  return (
    <section className="newList">
    <div className="newList__header">
        <h1 className="newList__header__title">Últimas noticias</h1>
        <i class="fa-solid fa-plus newList__header__icon"></i>
    </div>
      <ul className="newList__ul">{dataHtml}</ul>
    </section>
  );
}

export default NewsList;
