export default class RestoService {
    constructor() {
        this._apiBase = 'http://127.0.0.1:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getMenuItems = async () => {
        const res = await this.getResource(`/menu/`);
        return res;
    }

    getMenuItem = async(id) => {
        const res = await this.getResource(`/menu/${id}`);
        return res;
    }

    setOrder = async (order) => {
        const number = await this.getOrderNumber();
        const newOrder = {
            id: number,
            order: order
        }
        const response = await fetch(`${this._apiBase}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newOrder)
        });

        if(!response.ok) {
            throw new Error('json error');
        }
    }

    getOrderNumber = async () => {
        const res = await this.getResource('/orders/');
        const orderNumber = res.length + 1;

        return orderNumber
    }
}