const Base = require('./base.js');
const moment = require('moment');
module.exports = class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        const page = this.get('page') || 1;
        const size = this.get('size') || 10;
        let name = this.get('name') || '';
        const model = this.model('manufactor');
        const data = await model.where({
            name: ['like', `%${name}%`],
        }).order(['id DESC']).page(page, size).countSelect();
        let info = {
            manufactorData: data,
        }
        return this.success(info);
    }

    async infoAction() {
        const id = this.get('id');
        const model = this.model('manufactor');
        let info = await model.where({
            id: id
        }).find();
        return this.success(info);
    }

    async destoryAction() {
        let id = this.post('id');
        console.log(id);
        await this.model('manufactor').where({
            id: id
        }).update({
            is_delete: 1
        });
        return this.success(id);
    }

    async storeAction() {
        const values = this.post('info');
        const model = this.model('manufactor');
        let id = values.id;
        if (id > 0) {
            await model.where({
                id: id
            }).update(values);
        } else {
            delete values.id;
            id = await model.add(values);
        }
        return this.success(values);
    }
};
