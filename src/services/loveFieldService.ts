import TodoVO from "../models/TodoVO";
import * as lf from "lovefield";

class LoveFieldService {
  private TodoDB: lf.Database;
  private ItamTable!: lf.schema.Table;

  async getDB(): Promise<any> {
    let database: lf.Database;
    let table: lf.schema.Table;

    const schemaBuilder = await lf.schema.create("todo", 1);

    schemaBuilder
      .createTable("Item")
      .addColumn("id", lf.Type.INTEGER)
      .addColumn("description", lf.Type.STRING)
      .addColumn("deadline", lf.Type.DATE_TIME)
      .addColumn("done", lf.Type.BOOLEAN)
      // use auto-increment set true
      .addPrimaryKey([
        {
          autoIncrement: true,
          name: "id",
          order: lf.Order.DESC
        }
      ])
      .addIndex("idxDeadline", ["deadline"], false, lf.Order.DESC);

    return await schemaBuilder.connect().then(function(db: lf.Database) {
      return { db, table: db.getSchema().table("Item") };
    });
  }

  async getAll(): Promise<any> {
    return await this.getDB()
      .then(function(res) {
        return res.db
          .select()
          .from(res.table)
          .where(res.table.done.eq(false))
          .exec();
      })
      .then(result => {
        console.log(result);
        return result;
      });
  }

  add(todo: TodoVO) {
    return this.getDB().then(r => {
      console.log("add", todo);

      let rows: Array<any> = [];
      let row = r.table.createRow({
        description: todo.description,
        deadline: new Date(todo.yyyy, todo.mm, todo.dd),
        done: todo.done
      });

      rows.push(row);

      r.db
        .insert()
        .into(r.table)
        .values(rows)
        .exec();
    });
  }

  remove(id: number) {
    return this.getDB().then(r => {
      r.db
        .delete()
        .from(r.table)
        .where(r.table.id.eq(id))
        .exec();
    });
  }

  // save(todos: Array<TodoVO>) {
  //   this.getDB().db
  //   this.getDB().table

  //     let rows: Array<any> = [];
  //     let row = this.ItamTable.createRow({
  //       id: 1,
  //       description: "Get a cup of coffee",
  //       deadline: new Date(),
  //       done: false
  //     });
  //     rows.push(row);

  //     return this.TodoDB.insertOrReplace()
  //       .into(this.ItamTable)
  //       .values(rows)
  //       .exec();

  // }

  constructor() {}
}

export const lfs = new LoveFieldService();
