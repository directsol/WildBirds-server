import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        PassportModule,
        UsersModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '60s' },
            // fixme
            //signOptions: { expiresIn: process.env['JWT_TTL'] },
            //secret: process.env['JWT_SECRET'],
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ],
    exports: [
        AuthService,
    ]
})
export class AuthModule {
    constructor() {

    }
}
