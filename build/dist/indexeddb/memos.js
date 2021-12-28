import Dexie from "../../_snowpack/pkg/dexie.js";
const database = new Dexie("markdown-editor");
database.version(1).stores({memos: "&datetime"});
const memos = database.table("memos");
const NUM_PER_PAGE = 10;
export const getMemos = (page) => {
  const offset = (page - 1) * NUM_PER_PAGE;
  return memos.orderBy("datetime").reverse().offset(offset).limit(NUM_PER_PAGE).toArray();
};
export const getMemoPageCount = async () => {
  const totalCount = await memos.count();
  const pageCount = Math.ceil(totalCount / NUM_PER_PAGE);
  return pageCount > 0 ? pageCount : 1;
};
export const putMemo = async (title, text) => {
  const datetime = new Date().toISOString();
  await memos.put({datetime, title, text});
};
