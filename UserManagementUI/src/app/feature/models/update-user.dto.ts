export interface UpdateUserDto {
  userId: number;
  username: string;
  name: string;
  surname: string;
  email: string;
  registrationDate?: Date;
  enable: boolean;
}
