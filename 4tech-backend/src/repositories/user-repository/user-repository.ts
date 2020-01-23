import { Injectable } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { LoginViewModel } from 'src/domain/login.viewmodel';


@Injectable()
export class UserRepository {
    db: UserViewModel[] = [];

    
    getUsers(){
        return this.db;
    }

    createUser(newUser: UserViewModel) {
        this.db.push(newUser);
        return 'User successfully added';
    }
    deleteUser(user: LoginViewModel) {
        this.db = this.db.filter(us => us.userLogin !== user.userLogin); 
        return 'User successfully removed';
    }
    updateUser(user: LoginViewModel) {
       const foundUser = this.db.find(us => us.userLogin === user.userLogin);
       foundUser.password = user.password ? user.password : foundUser.password;
    }
    
}
