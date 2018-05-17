import { assert } from "chai";
import { beforeTest } from "./BaseTest";
import UserDao from "../src/dao/UserDao";
import RoleDao from "../src/dao/RoleDao";
import UserRoleDao from "../src/dao/UserRoleDao";

describe("", () => {
  before(done => {
    beforeTest(done);
  });

  // after((done) => {
  // 	after(done);
  // });

  it("Test init data", done => {
    RoleDao.transaction(async t => {
      const role1 = await RoleDao.create(
        {
          createDate: new Date(),
          name: "Role 1"
        },
        { transaction: t }
      );
      const role2 = await RoleDao.create(
        {
          createDate: new Date(),
          name: "Role 2"
        },
        { transaction: t }
      );
      const user1 = await UserDao.create(
        {
          createDate: new Date(),
          name: "User 1"
        },
        { transaction: t }
      );
      const user2 = await UserDao.create(
        {
          createDate: new Date(),
          name: "User 2"
        },
        { transaction: t }
      );
      await UserRoleDao.create(
        {
          createDate: new Date(),
          userId: user1.id,
          roleId: role1.id
        },
        { transaction: t }
      );
      await UserRoleDao.create(
        {
          createDate: new Date(),
          userId: user2.id,
          roleId: role2.id
        },
        { transaction: t }
      );
      return Promise.resolve(user1.id);
    })
      .then(res => {
        console.log("Init data success");
        assert.isTrue(typeof res === "number");
        done();
      })
      .catch(err => {
        console.log(err);
        console.log("Init data failed");
        done();
      });
  });
});
