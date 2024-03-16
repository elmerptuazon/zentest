import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './api/note/note.module';

@Module({
  imports: [
    AuthModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/note'),
    NoteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
