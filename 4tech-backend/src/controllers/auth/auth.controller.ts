import { Controller, Post, Body } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';

@Controller('auth')
export class AuthController {

    @Post('login')
    login(@Body() login: UserViewModel){
        return 'Teste';
    }

}
