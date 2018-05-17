import { UserRole } from "../models/UserRole";
import { BaseDao } from "./BaseDao";

class UserRoleDao extends BaseDao {
  constructor() {
    super(UserRole);
  }
}

export default new UserRoleDao();
