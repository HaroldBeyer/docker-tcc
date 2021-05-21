const { httpReturn } = require('../utils/httpReturn');
const { HTTP_SUCCESS, FAUNA_DB_COLLECTIONS } = require('../utils/enums');
const DB = require('../db/db');

class ServiceService {
    constructor() {
        this.type = FAUNA_DB_COLLECTIONS.SERVICE;
        this.db = DB;
    }

    async get(event) {
        const id = event && event.params && event.params.id ? event.params.id : event;

        const result = await this.db.get(this.type, id);

        return httpReturn(
            HTTP_SUCCESS.SuccessOK,
            `Succesfully got ${id}`,
            result
        );
    }

    async getAll() {
        const result = await this.db.getAll(this.type);

        return httpReturn(
            HTTP_SUCCESS.SuccessOK,
            `Succesfully got all`,
            result
        );
    }

    async insert(event) {
        const requestBody = event.body;
        const { name } = requestBody;

        const Item = { name };


        const result = await this.db.create(this.type, Item);

        return httpReturn(
            HTTP_SUCCESS.SuccessCreated,
            `Succesfully created`,
            result
        );
    }
}

module.exports = {
    ServiceService
}
