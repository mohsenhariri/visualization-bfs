class Queue {
  content: Set<string>;
  constructor() {
    this.content = new Set();
  }
  add(node: string): void {
    this.content.add(node);
  }
  pick(): string {
    const [first] = this.content;
    this.content.delete(first);
    return first;
  }
}

export default Queue;
