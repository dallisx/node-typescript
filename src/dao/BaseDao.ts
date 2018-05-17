import { db } from "../config/Db";

/**
 * define base dao
 */
export class BaseDao {
  model: any;
  constructor(model: any) {
    this.model = model;
  }

  create(record: object, config: object = {}) {
    return this.model.create(record, config);
  }

  findAll(where: object, include?: object, limit?: number, offset: number = 0) {
    return this.model.findAll({
      where: where,
      include: include,
      limit: limit,
      offset: offset
    });
  }

  transaction(toDoFun) {
    return db.transaction(toDoFun);
  }
}
