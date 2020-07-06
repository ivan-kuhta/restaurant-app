import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCard} from '../../actions';

import WithRestoService from '../hoc';

const CartTable = ({items, deleteFromCard, RestoService}) => {
    if(items.length === 0) {
        return (<div className="cart__title">Ваша корзина пуста</div>)
    }

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{count}x{price}$</div>
                                <div onClick={() => deleteFromCard(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={() => {RestoService.setOrder(generateOrder(items))}}className="order">Оформити замовлення</button>
            
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            count: item.count
        }
    })
    return newOrder;
}

const mapStateToProp = ({items}) => {
    return {
        items
    }
} 

const mapDispatchToProp =  {
    deleteFromCard
} 

export default WithRestoService()(connect(mapStateToProp, mapDispatchToProp)(CartTable));