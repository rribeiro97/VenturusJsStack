import { Controller, Get, Post, Body, Delete, Put, UseGuards } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { LoginViewModel } from 'src/domain/login.viewmodel';
import {AuthGuard} from '@nestjs/passport';
@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }
    @UseGuards (AuthGuard('jwt'))
    @Get()
    getUser() {
        return this.userService.getUsers();
    }
    @Get('teste')
    retornarTeste() {
        return 'Esse caminho é diferente';
    }
    @Post()
    criarUsuarios(@Body() newUser: UserViewModel) {
        return this.userService.createNewUser(newUser);
    }
    @Delete()
    deleteUser(@Body() user: LoginViewModel ) {
        return this.userService.deleteUser(user);
    }
    @Put()
    UpdateUserPassword(@Body() user: LoginViewModel) {
        return this.userService.updateUserPassword(user);
    }
}
