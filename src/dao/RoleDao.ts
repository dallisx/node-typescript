import { Role } from "../models/Role";
import { BaseDao } from "./BaseDao";

class RoleDao extends BaseDao {
  constructor() {
    super(Role);
  }
}

export default new RoleDao();
