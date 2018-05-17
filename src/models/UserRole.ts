import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  ForeignKey
} from "sequelize-typescript";

import { User } from "./User";
import { Role } from "./Role";

@Table
export class UserRole extends Model<UserRole> {
  @AllowNull(false)
  @Column(DataType.DATE)
  createDate: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  lastUpdateDate: Date;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  userId: number;

  @ForeignKey(() => Role)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  roleId: number;
}
