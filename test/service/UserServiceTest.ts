import { assert } from "chai";
import UserService from "../../src/service/UserService";
import { Query } from "../../src/query";

describe("Test user service ", () => {
  it("Test list all user", done => {
    const query = new Query(0, 10);
    UserService.listUser(query)
      .then(res => {
        assert.isNotNull(res);
      })
      .catch(error => {
        assert.isNull(error);
      });
  });
});
