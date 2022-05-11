import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
          <div className="items">
            <div className="cartItem ">
              <div style={{ backgroundImage: 'url(/img/image1.jpg)' }} className="cartItemImg"></div>
              <div className="d-flex flex-column">
                <p className="mb-1">
                  Мужские Кроссовки
                  <br />
                  Nike Air Max 270
                </p>
                <b>
                  12 999р
                </b>
              </div>
              <div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"></img>
              </div>
            </div>
            <div className="cartItem ">
              <div style={{ backgroundImage: 'url(/img/image1.jpg)' }} className="cartItemImg"></div>
              <div className="d-flex flex-column">
                <p className="mb-1">
                  Мужские Кроссовки
                  <br />
                  Nike Air Max 270
                </p>
                <b>
                  12 999р
                </b>
              </div>
              <div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="remove"></img>
              </div>
            </div>
          </div>

          <ul className="cartTotalBlock">
            <li >
              <span>Итого:</span>
              <div></div>
              <b>21 499 руб.</b>
            </li>
            <li >
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
        </div>
      </div>

      <header>
        <div className="d-flex align-items-center">
          <img alt="logo" width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3>react sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-items-center">
          <li className="d-flex align-items-center">
            <AiOutlineShoppingCart style={{ height: '20px', width: '20px', color: 'gray' }} />
            <span>1205 руб.</span>
          </li>
          {/* <li>
            <AiOutlineHeart style={{ height: '20px', width: '20px', color: 'gray' }} />
          </li> */}
          <li>
            < AiOutlineUser style={{ height: '20px', width: '20px', color: 'gray' }} />
          </li>
        </ul>
      </header>
      <div className="content p-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-items-center">
            <AiOutlineSearch style={{ color: '#e4e4e4', height: '20px', width: '20px' }} />
            <input type="text" placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="card">
            <div className="favorite">
              <img className="heart" src="/img/heart-unliked.svg" alt="unliked"></img>
            </div>
            <img width={133} height={112} src="/img/image1.jpg" alt="sneakers"></img>
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
