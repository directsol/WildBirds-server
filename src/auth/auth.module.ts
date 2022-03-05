import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from "./local.strategy";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

console.log(process.env['JWT_SECRET'])

@Module({
    imports: [
        PassportModule,
        UsersModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: process.env['JWT_TTL'] },
            //secret: process.env['JWT_SECRET'],
            //signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
    ],
    exports: [
        AuthService,
    ]
})
export class AuthModule {
    constructor() {

    }
}
