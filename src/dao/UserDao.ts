import { User } from "../models/User";
import { BaseDao } from "./BaseDao";

class UserDao extends BaseDao {
  constructor() {
    super(User);
  }
}

export default new UserDao();
