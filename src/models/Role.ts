import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull
} from "sequelize-typescript";

@Table
export class Role extends Model<Role> {

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
  description: string;
}
