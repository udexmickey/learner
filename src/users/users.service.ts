import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserInterFace } from './users.interface';
import { userUpdate } from './usersUpdate.interface';

@Injectable()
export class userServices {
  private readonly users: UserInterFace[] = [
    {
      name: 'comfy',
      gender: 'female',
      age: 31,
      id: 1,
    },
    {
      name: 'fola',
      gender: 'male',
      age: 26,
      id: 3,
    },
  ];

  async getAllUsers() {
    return this.users;
  }

  async createUser(user: UserInterFace) {
    const ids = this.users.map((id) => id.id.valueOf());
    if (!ids.includes(user.id)) {
      this.users.push(user);
      return this.users.find((obj) => obj.id === user.id);
    } else {
      throw new UnauthorizedException(
        `User with the id ${user.id} already exist`,
      );
    }
  }

  async findOne(id: number): Promise<UserInterFace> {
    const user = this.users.find((obj) => obj.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} don't exist`);
    return user;
  }

  async update(id: number, updatedUser: userUpdate): Promise<userUpdate> {
    const objIndex = this.users.findIndex((obj) => obj.id == id);
    this.users[objIndex] = updatedUser;
    return updatedUser;
  }

  async deleteUser(id: number): Promise<userUpdate> {
    return this.users.find((user) => {
      if (user.id === id) {
        const userid = this.users.findIndex((person) => person.id == id);
        return this.users.splice(userid, 1);
      } else {
        throw new NotFoundException(`User with id ${user.id} don't exist`);
      }
    });
  }
}
