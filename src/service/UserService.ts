// import { assert } from "chai";
import UserDao from "../dao/UserDao";
import { Query } from "../query";

/**
 * @author dallisx@sina.com
 * @Date 2018-05-15
 */
class UserService {
  dao: any;
  constructor() {
    this.dao = UserDao;
  }

  /**
   *
   * @param {Query} query
   * @return {any}
   */
  listUser(query: Query) {
    // try {
    //   assert(query);
    //   assert(query.page >= 0);
    //   assert(query.pageSize);
    // } catch (e) {
    //   throw e;
    // }
    let where = {};

    return this.dao.findAll(where, {}, query.page, query.pageSize);
  }
}

export default new UserService();
