function Drawer() {
    return (
        <div className="overlay d-none">
            <div className="drawer">
                <h2>
                    Корзина<img className="removeBtn pointer" src="/img/btn-remove.svg" alt="remove"></img>
                </h2>
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
                <div className="cartTotalBlock">
                    <ul>
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
                    <div className="greenBtn">
                        <button>
                            Оформить заказ
                            <img src="/img/arrow.svg" alt="arrow"></img>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Drawer