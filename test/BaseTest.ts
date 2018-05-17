// process.env.NODE_ENV = 'test';
import { db } from "../src/config/Db";
import { drop, sync } from "./DbUitls";

export const beforeTest = function(done): any {
  sync(db)
    .then(() => {
      console.log("Db sync success");
      done();
    })
    .catch(err => {
      console.log(err);
      console.log("Db sync failed");
      done();
    });
};

export const afterTest = function(done): any {
  drop(db)
    .then(() => {
      console.log("Db drop success");
      db
        .close()
        .then(() => {
          console.log("Db close success");
          done();
        })
        .catch(err => {
          console.log(err);
          console.log("Db close failed");
          done();
        });
    })
    .catch(err => {
      console.log(err);
      console.log("Db drop failed");
      done();
    });
};
