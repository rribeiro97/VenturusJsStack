import { Injectable } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { LoginViewModel } from 'src/domain/login.viewmodel';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {User} from 'src/domain/schemas/user.schema';
import { UserActivity } from 'src/domain/schemas/user-activity.schema';

@Injectable()
export class UserRepository {
    constructor(@InjectModel('User') private readonly userCollection: Model<User>) {

    }

    async getByCredentials(userLoginFromViewModel: string, passwordFromViewModel: string) {
        return await this.userCollection
        .findOne({
            userLogin: userLoginFromViewModel,
            password: passwordFromViewModel,
        })
        .lean();
    }
    async getById(id: string): Promise<UserActivity> {
        return await this.userCollection
            .findOne({_id: id})
            .lean();
    }
    async getUsers(): Promise<User[]> {
        return await this.userCollection
        .find()
        .select({__v: false, password: false})
        .lean();
    }

    async createUser(newUser: UserViewModel) {
       const user = this.userCollection(newUser);
       return await user.save();
    }
    deleteUser(user: LoginViewModel) {
        // this.db = this.db.filter(us => us.userLogin !== user.userLogin);
        // return 'User successfully removed';
    }
    updateUser(user: LoginViewModel) {
    //    const foundUser = this.db.find(us => us.userLogin === user.userLogin);
    //    foundUser.password = user.password ? user.password : foundUser.password;
    }
}
