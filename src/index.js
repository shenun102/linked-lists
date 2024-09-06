import { LinkedList } from "./Linked-List";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("Not a Animal");
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
list.pop();

console.log(list.contains("donkey"));

console.log(list.find("hamster"))

list.insertAt("cheese",3)
list.removeAt(5)

console.log(list.toString());
