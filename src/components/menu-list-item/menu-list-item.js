import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom';

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;

    const icon = () => {
        switch (category) {
            case 'pizza':
                return (
                    <i className="fas fa-pizza-slice"></i>
                )
            case 'meat':
                return (
                    <i className="fas fa-bacon"></i>
                )
            case 'salads':
                return (
                    <i className="fab fa-pagelines"></i>
                )
            default:
                break;
        }
    }
 
    return (
        <li className="menu__item">
            <Link to = {`/${menuItem.id}`}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <div className="menu__icon">{icon()}</div>
                <button className="menu__btn">Add to cart</button>
            </Link>
        </li>
    )
}

export default MenuListItem;