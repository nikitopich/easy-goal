import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableBookmark1674033449282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'bookmark',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: 'resourceName',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false
                    },

                    {
                        name: 'info',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'previewImage',
                        type: 'bytea'
                    }
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bookmark');
    }

}
