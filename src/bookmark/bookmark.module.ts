import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {BookmarkRepository} from "./repository/bookmark.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([BookmarkRepository]),
  ]
})
export class BookmarkModule {}
