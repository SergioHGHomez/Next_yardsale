import React from 'react'
import '@styles/Checkout.scss'

const Checkout = () => {
    return (
        <section className="Checkout">
        <div className="order-list">
            <h1 className="order-list_h1">My order</h1>
            <div className="order-list_info">
                <div>
                    <p className="info_date">04.25.2021</p>
                    <p className="info_articles">2 articles</p>

                </div>
                <p className="info_total">$ 2.500.000</p>
            </div>
            <div className="order-list_card">
                <div className="card_item">
                    <img className="order-list_img" src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="camera" />
                    <p className="order-list_name">sony camera </p>
                </div>
                <p className="order-list_price">$ 500.000</p>

            </div>
            <div className="order-list_card">
                <div className="card_item">
                    <img className="order-list_img" src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="camera" />
                    <p className="order-list_name">sony camera </p>
                </div>
                <p className="order-list_price">$ 500.000</p>

            </div>
            <div className="order-list_card">
                <div className="card_item">
                    <img className="order-list_img" src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="camera" />
                    <p className="order-list_name">sony camera </p>
                </div>
                <p className="order-list_price">$ 500.000</p>

            </div>
            <div className="order-list_card">
                <div className="card_item">
                    <img className="order-list_img" src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="camera" />
                    <p className="order-list_name">sony camera </p>
                </div>
                <p className="order-list_price">$ 500.000</p>

            </div>
            <div className="order-list_card">
                <div className="card_item">
                    <img className="order-list_img" src="https://images.pexels.com/photos/1367202/pexels-photo-1367202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="camera" />
                    <p className="order-list_name">sony camera </p>
                </div>
                <p className="order-list_price">$ 500.000</p>

            </div>
            
        


        </div>

    </section>
    );

}
    export default  Checkout;