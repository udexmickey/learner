import { Module } from '@nestjs/common';
import { userControllers } from './user.controller';
import { userServices } from './users.service';

@Module({
  exports: [userServices],
  providers: [userServices],
  controllers: [userControllers],
})
export class userModule {}
