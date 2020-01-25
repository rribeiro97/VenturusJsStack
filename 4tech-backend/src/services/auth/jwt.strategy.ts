import { Injectable} from '@nestjs/common';
import { Strategy, ExtractJwt} from 'passport-jwt';
import { PassportStrategy} from '@nestjs/passport';

// Nunca deve ser exposta publicamente
// A secret key só esta expposta com a porposta de mostrar o que está fazendo, em prod deve a key deve estar protegida por métodos
// protegida por secret vauls, var amb, ou serviços de configuração.
export const secretKey = 'LEVIOSAAAA';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreException: false,
            secretOrKey: secretKey,
        });
    }
    async validate(payLoad: any) {
        return {userLogin: payLoad.userLogin};
    }
}
