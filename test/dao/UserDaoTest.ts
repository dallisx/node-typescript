import { assert } from "chai";
import { beforeTest } from "../BaseTest";
import UserDao from "../../src/dao/UserDao";
// import UserRoleDao from "../../src/dao/UserRoleDao";
// import RoleDao from "../../src/dao/RoleDao";

describe("", () => {
  before(done => {
    beforeTest(done);
  });

  before(done => {
    UserDao.transaction(async t => {
      const user1 = await UserDao.create(
        {
          createDate: new Date(),
          name: "User 1"
        },
        { transaction: t }
      );
      await UserDao.create(
        {
          createDate: new Date(),
          name: "User 2"
        },
        { transaction: t }
      );
      return Promise.resolve(user1.id);
    })
      .then(res => {
        console.log("init user success");
        assert.isTrue(typeof res === "number");
        done();
      })
      .catch(err => {
        console.log(err);
        console.log("init user failed");
        done();
      });
  });

  it("Test find all user", done => {
    UserDao.findAll({})
      .then(res => {
        assert.isNotNull(res);
        assert.equal(2, res.length);
        res.forEach(u => {
          assert.isNotNull(u.get().name);
        });
        done();
      })
      .catch(err => {
        done();
      });
  });
});
