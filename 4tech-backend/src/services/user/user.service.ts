import { Injectable, BadRequestException } from '@nestjs/common';
import {UserRepository} from 'src/repositories/user-repository/user-repository';
import { UserViewModel } from 'src/domain/user.viewmodel';

@Injectable()
export class UserService {
    constructor(readonly userRepository: UserRepository){

    }
    getUsers(){
        return this.userRepository.getUsers();
    }
    

    createNewUser(newUser: UserViewModel){
        const userList = this.userRepository.getUsers();
        const existingUser = userList.find(a => a.userName === newUser.userName);

        if (existingUser) {
            throw new BadRequestException('This username already exists !');
        }

        return this.userRepository.createUser(newUser);
    }
}
