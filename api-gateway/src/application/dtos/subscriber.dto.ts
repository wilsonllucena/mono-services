import { IsString, IsEmail } from 'class-validator';

export class SubscriberDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
