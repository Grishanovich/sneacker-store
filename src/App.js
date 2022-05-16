import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

function App() {

  function data() {

    const arr = [
      { img: "/img/image1.jpg", name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12999" },
      { img: "/img/image2.jpg", name: "Мужские Кроссовки Nike Air Max 270", price: "10999" },
      { img: "/img/image3.jpg", name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8499" },
      { img: "/img/image4.jpg", name: "Кроссовки Puma X Aka Boku Future Rider", price: "8999" },
    ]

    const card = arr.map((item, i) => {
      return (<Card key={i} name={item.name} price={item.price} img={item.img} />)
    })
    return card
  }

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
          {data()}
        </div>

      </div>
    </div>
  );
}

export default App;
