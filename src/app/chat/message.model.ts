export class Message {
  public date: number;

  constructor(public content: string, public author: string) {
    this.date = Date.now();
  }
}
