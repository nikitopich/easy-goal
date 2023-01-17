import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"
import "reflect-metadata"

@Entity('bookmarks')
export class Bookmarks extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    resourceName: string

    @Column({
        nullable: false
    })
    title: string

    @Column({
        nullable: false
    })
    info: string

    @Column({
        type: 'bytea',
    })
    previewImage: Uint8Array

}
