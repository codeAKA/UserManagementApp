export interface UserDto {
  username: string;
  name: string;
  surname: string;
  email: string;
  registrationDate?: Date;
  enable: boolean;
}
