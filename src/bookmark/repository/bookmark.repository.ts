import {Bookmark} from "../entity/bookmark.entity";
import {EntityRepository, Repository} from "typeorm";

@EntityRepository(Bookmark)
export class BookmarkRepository extends Repository<Bookmark> {
}