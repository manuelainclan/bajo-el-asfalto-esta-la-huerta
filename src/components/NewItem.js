import "../styles/NewItem.scss";

function NewItem ({eachNews}) {
    
return (
    <li>
      {/* <Link className="link" to={`/detail/${eachNew.id}`}> */}
        <div className="item">
         <div className="item__data">
             <p className="item__data__user">de: {eachNews.user}</p>
             <p className="item__data__date">{eachNews.date}</p>
         </div>
          <div className="item__text">
            <p className="item__text__new">{eachNews.new}</p>
          </div>
        </div>
      {/* </Link> */}
    </li>
  );
    
}

export default NewItem;
