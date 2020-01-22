import { Injectable } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';

@Injectable()
export class AuthService {
    login(login: UserViewModel) {
        return 'Exists'
    }
}
