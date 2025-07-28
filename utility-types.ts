interface User {
  id: number;
  name: string;
  email?: string;
}

type PartialUser = Partial<User>;
type UserWithoutEmail = Omit<User, "email">;
type ReadonlyUser = Readonly<User>;
