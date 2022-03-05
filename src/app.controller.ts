import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AppService } from './app.service';
import { AuthService } from "./auth/auth.service";

@Controller()
export class AppController {
    constructor(
        private appService: AppService,
        private authService: AuthService
    ) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
