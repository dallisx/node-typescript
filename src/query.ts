/**
 * @author dallisx@sina.com
 * @Date 2018-05-15
 */
export class Query {
  page: number;
  pageSize: number;
  query?: string;
  constructor(page: number, pageSize: number, query?: string) {
    this.page = page;
    this.pageSize = pageSize;
    this.query = query;
  }
}
