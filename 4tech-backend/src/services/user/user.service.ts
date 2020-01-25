import { Injectable, BadRequestException } from '@nestjs/common';
import {UserRepository} from 'src/repositories/user-repository/user-repository';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { logicalExpression } from '@babel/types';
import { LoginViewModel } from 'src/domain/login.viewmodel';

// Create a function that checks if the user exists, after that replace the function to avoid code repetition.
// Question : Can I create auxiliar functions in the service layer ?

@Injectable()
export class UserService {
    constructor(readonly userRepository: UserRepository) {

    }
    getUsers() {
        return this.userRepository.getUsers();
    }

    async createNewUser(newUser: UserViewModel) {
        const userList = await this.userRepository.getUsers();
        const existingUser = userList.find(a => a.userName === newUser.userName);

        if (existingUser) {
            throw new BadRequestException('This username already exists !');
        }

        return this.userRepository.createUser(newUser);

    }
    deleteUser(user: LoginViewModel) {
        // const userList = this.userRepository.getUsers();
        // const existingUser = userList.find(a => a.userLogin === user.userLogin);
        // if(existingUser) {
        //     return this.userRepository.deleteUser(user);
        // } else {
        //     throw new BadRequestException('This user doesnt exists in our database');
        // }
    }
    updateUserPassword(user: LoginViewModel) {
        // const userList = await this.userRepository.getUsers();
        // const existingUser = userList.find(a => a.userLogin === user.userLogin);
        // if(existingUser) {
        //     return this.userRepository.updateUser(user);
        // } else {
        //     throw new BadRequestException('This user doesnt exists in our database');
        // }
    }

    async attemptLogin(login: LoginViewModel) {
        const userList = await this.userRepository.getUsers();
        const foundLogin = userList
        .find( a =>
            a.userLogin === login.userLogin &&
            a.password === login.password );
        return foundLogin;
        }
}
