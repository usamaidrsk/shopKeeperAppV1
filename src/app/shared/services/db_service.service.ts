import {Injectable} from '@angular/core';
const DB = require('../../../assets/dbServer');


@Injectable()
export class DBService {
    connection: any;
    db = DB.DB;
    constructor() {
        this.db.connect();
    }
    getStaff(): any{
        //
    }
}
