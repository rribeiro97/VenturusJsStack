import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserRepository } from './repositories/user-repository/user-repository';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController,UserController,AuthController],
  providers: [AppService,UserService,UserRepository],
})
export class AppModule {}
