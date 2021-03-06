const { AlterStatusFacade } = require('../facades/alter-status-facade');
const { httpReturn } = require('../utils/httpReturn');
const { HTTP_SUCCESS, REQUEST_STATUS, FAUNA_DB_COLLECTIONS } = require('../utils/enums');
const DB = require('../db/db');

class RequestService {
    constructor() {
        this.type = FAUNA_DB_COLLECTIONS.REQUEST;
        this.db = DB;
        this.facade = new AlterStatusFacade(this, null);
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
        const createdAt = new Date().toISOString();
        const status = REQUEST_STATUS.WAITING;
        const { service, scheduledDate } = requestBody;

        const Item = { service, status, scheduledDate, createdAt };


        const result = await this.db.create(this.type, Item);

        return httpReturn(
            HTTP_SUCCESS.SuccessCreated,
            `Succesfully created`,
            result
        );
    }

    async confirm(event) {
        const id = event.params.id;
        console.log(`Id: ${id}`);
        return this.facade.propagateNewStatus(id, true);
    }

    async cancel(event) {
        const id = event.params.id;
        return this.facade.propagateNewStatus(id, false);
    }

    async alterStatus(id, status) {
        return this.db.update(this.type, id, { status });
    }

}

module.exports = {
    RequestService
}