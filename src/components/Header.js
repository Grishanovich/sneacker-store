import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function Header() {
    return (
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
                <li>
                    <AiOutlineHeart style={{ height: '20px', width: '20px', color: 'gray' }} />
                </li>
                <li>
                    < AiOutlineUser style={{ height: '20px', width: '20px', color: 'gray' }} />
                </li>
            </ul>
        </header>
    )
}

export default Header