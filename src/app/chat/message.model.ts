export class Message {
  public date: string;

  constructor(public content: string, public author: string) {
    this.date = (new Date()).toString();
  }
}
