import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Drawer />

      <div className="content p-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-items-center">
            <AiOutlineSearch style={{ color: '#e4e4e4', height: '20px', width: '20px' }} />
            <input type="text" placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex justify-content-between">

          <Card />

          <div className="card">
            <AiOutlineHeart style={{ height: '20px', width: '20px', color: 'gray' }} />
            <img width={133} height={112} src="/img/image2.jpg" alt="sneakers"></img>
            <h5 className="sneakerName">Мужские кроссовки<br /> Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-content-between align-items-center" >
              <div className="d-flex flex-column">
                <span className="sneacerPrice">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus"></img></button>
            </div>
          </div>

          <div className="card">
            <AiOutlineHeart style={{ height: '20px', width: '20px', color: 'gray' }} />
            <img width={133} height={112} src="/img/image3.jpg" alt="sneakers"></img>
            <h5 className="sneakerName">Мужские кроссовки<br /> Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-content-between align-items-center" >
              <div className="d-flex flex-column">
                <span className="sneacerPrice">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus"></img></button>
            </div>
          </div>

          <div className="card">
            <AiOutlineHeart style={{ height: '20px', width: '20px', color: 'gray' }} />
            <img width={133} height={112} src="/img/image4.jpg" alt="sneakers"></img>
            <h5 className="sneakerName">Мужские кроссовки<br /> Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-content-between align-items-center" >
              <div className="d-flex flex-column">
                <span className="sneacerPrice">Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button"><img width={11} height={11} src="/img/plus.svg" alt="plus"></img></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
