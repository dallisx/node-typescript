import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @AllowNull(false)
  @Column(DataType.DATE)
  createDate: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  lastUpdateDate: Date;

  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  email: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  address: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  description: string;
}
