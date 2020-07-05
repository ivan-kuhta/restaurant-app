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
        const res = await this.getResource(`/menu`);
        return res;
    }
}