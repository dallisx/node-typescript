export const drop = async function(db): Promise<any> {
  await db.drop();
};

export const sync = async function(db): Promise<any> {
  await db.sync({ force: true });
};
