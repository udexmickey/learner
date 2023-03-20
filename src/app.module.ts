import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { userModule } from './users/users.module';

@Module({
  imports: [CatsModule, userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
