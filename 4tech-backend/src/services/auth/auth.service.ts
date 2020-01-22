import { Injectable, BadRequestException } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService:UserService){

    }
    login(login: UserViewModel) {
        const user = this.userService.attemptLogin(login);
        
        if (user) {
            return ' Authenticated';
        } else {
            throw new BadRequestException('User Login or User password are incorrect!');
        }
    }
}
