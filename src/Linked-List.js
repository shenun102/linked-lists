import { Node } from "./Node";

export class LinkedList {
  constructor(array = []) {
    this.array = array;
  }

  append(value) {
    const newNode = new Node(value);
    this.array.push(newNode);
  }

  prepend(value) {
    const newNode = new Node(value);
    this.array.unshift(newNode);
  }

  size() {
    return this.array.length;
  }

  head() {
    return this.array[0];
  }

  tail() {
    return this.array[this.array.length - 1];
  }

  at(index) {
    return this.array[index];
  }

  pop() {
    this.array.pop();
  }

  contains(value) {
    for (let node of this.array) {
      if (node.value === value) return true;
    }
    return false;
  }

  find(value) {
    return this.array.findIndex((node) => node.value === value);
  }

  toString() {
    let string = "";
    this.array.forEach((node) => {
      string += ` ( ${node.value} ) ->`;
    });
    return (string += ` ${this.array[this.array.length - 1].nextNode}`);
  }

  insertAt(value, index) {
    this.array.splice(index, 0, new Node(value));
  }

  removeAt(index) {
    this.array.splice(index, 1);
  }
}
