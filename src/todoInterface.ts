interface itemInterface {
  id: number;
  text: string;
  completed: boolean;
}

abstract class item implements itemInterface {
  constructor (
    public id: number,
    public text:string,
    public completed:boolean) {}
}

class todoItem extends item {
  constructor (
    public id: number,
    public text:string,
    public completed:boolean
  ){
    super(id, text, completed);
  }
}

export { todoItem };