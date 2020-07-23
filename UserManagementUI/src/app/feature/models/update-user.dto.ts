export interface UpdateUserDto {
  id: number;
  username: string;
  name: string;
  surname: string;
  email: string;
  registrationDate?: Date;
  enable: boolean;
}
