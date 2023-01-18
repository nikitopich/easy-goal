import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"
import "reflect-metadata"

@Entity('bookmark')
export class Bookmark extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    resource_name: string

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
    preview_image: Uint8Array

}
