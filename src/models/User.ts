import { DateType, Model} from './Model';

export enum Role {
  Admin = 'admin',
  User = 'user',
}

export type DefaultUserData = {
  role: Role;
};

export type UserType = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role: Role;
};

const defaultUserData: DefaultUserData = {
  role: Role.User,
};

export class User extends Model {
  static tableName = 'users';

  public static async create<Payload>(data: Payload): Promise<UserType & DateType> {
    return super.insert<Payload & DefaultUserData, UserType>({
      ...data,
      ...defaultUserData,
    });
  }

  public static findByEmail(email: string): Promise<UserType> {
    return this.findBy<
      {
        email: string;
      },
      UserType
    >({ email });
  }
}