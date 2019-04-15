export default class TodoVO {
  public id!: number;
  public title!: string;
  public description!: string;
  public deadline!: string;
  public done: boolean = false;

  public yyyy!: number;
  public mm!: number;
  public dd!: number;

  setYMD() {
    const ymd = this.deadline.split("-");
    this.yyyy = Number(ymd[0]);
    this.mm = Number(ymd[1]);
    this.dd = Number(ymd[2]);
  }

  constructor(todoInput: any) {
    if (todoInput === null) {
      return;
    }
    this.id = todoInput.id;
    this.title = todoInput.title;
    this.description = todoInput.description;
    this.deadline = todoInput.deadline;
    this.done = todoInput.done;

    if (todoInput.deadline) {
      console.log("split");
      this.setYMD();
    }
  }
}
