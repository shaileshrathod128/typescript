type UserType = {
  name: string;
  age: number;
};

interface UserInterface {
  name: string;
  age: number;
}

const user1: UserType = { name: "Alice", age: 30 };
const user2: UserInterface = { name: "Bob", age: 25 };
