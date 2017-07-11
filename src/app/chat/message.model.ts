export class Message {
  constructor(public content: string, public author: string, public date?: number) {
    if (typeof this.date === 'undefined') {
      this.date = Date.now();
    }
  }
}
