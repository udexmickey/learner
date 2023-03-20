import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class createUpdatedUserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsEnum(['Male', 'Female', 'Others'], {
    message: `gender must be one of the following values: Male, Female, Others`,
  })
  @IsNotEmpty()
  gender: string;

  @IsInt()
  id: number;
}
