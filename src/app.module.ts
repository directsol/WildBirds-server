import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env["DATABASE_HOST"],
          port: parseInt(process.env["DATABASE_PORT"]),
          username: process.env["DATABASE_USERNAME"],
          password: process.env["DATABASE_PASSWORD"],
          database: process.env["DATABASE_NAME"],
          entities: [ __dirname + "/entity/*.{js,ts}"],
          synchronize: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
