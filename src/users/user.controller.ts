import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { createUpdatedUserDto } from './updateUsers.dto';
import { createUserDto } from './users.dto';
import { userServices } from './users.service';

@Controller('users')
export class userControllers {
  constructor(private userData: userServices) {}

  @Post()
  async createUser(
    @Body(new ValidationPipe())
    createDto: createUserDto,
  ) {
    try {
      return this.userData.createUser(createDto);
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  @Get()
  getAll() {
    return this.userData.getAllUsers();
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.userData.findOne(id);
    } catch (error) {
      throw new NotFoundException(`User with id ${id} don't exist`);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatedUser: createUpdatedUserDto,
  ) {
    return this.userData.update(id, updatedUser);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userData.deleteUser(id);
  }
}
