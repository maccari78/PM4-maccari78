import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUUID1713043198994 implements MigrationInterface {
    name = 'AddUUID1713043198994'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d"`);
        await queryRunner.query(`ALTER TABLE "shippings" DROP CONSTRAINT "PK_665fb613135782a598a2b47e5b2"`);
        await queryRunner.query(`ALTER TABLE "shippings" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "shippings" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "shippings" ADD CONSTRAINT "PK_665fb613135782a598a2b47e5b2" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_823bad3524a5d095453c43286bb"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1102b5a0c580f845993e2f766f6"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "updatedById"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "updatedById" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "REL_cc4e4adab232e8c05026b2f345"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "shippingAddressId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "shippingAddressId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "UQ_cc4e4adab232e8c05026b2f345d" UNIQUE ("shippingAddressId")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_4eff63e89274f79195e25c5c115"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "PK_4945c6758fd65ffacda760b4ac9"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "PK_4945c6758fd65ffacda760b4ac9" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "orderId" uuid`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_a6b3c434392f5d10ec171043666"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "PK_231ae565c273ee700b283f15c1d"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_d7e7f53b786522ae18147bb853c"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "addedById"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "addedById" uuid`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_f98c5a74d02c74694392026011f"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "addedById"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "addedById" uuid`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1102b5a0c580f845993e2f766f6" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d" FOREIGN KEY ("shippingAddressId") REFERENCES "shippings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_823bad3524a5d095453c43286bb" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_4eff63e89274f79195e25c5c115" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_a6b3c434392f5d10ec171043666" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_d7e7f53b786522ae18147bb853c" FOREIGN KEY ("addedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_f98c5a74d02c74694392026011f" FOREIGN KEY ("addedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_f98c5a74d02c74694392026011f"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_ff56834e735fa78a15d0cf21926"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_d7e7f53b786522ae18147bb853c"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_a6b3c434392f5d10ec171043666"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_4eff63e89274f79195e25c5c115"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "FK_823bad3524a5d095453c43286bb"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1102b5a0c580f845993e2f766f6"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "addedById"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "addedById" integer`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_f98c5a74d02c74694392026011f" FOREIGN KEY ("addedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "addedById"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "addedById" integer`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_ff56834e735fa78a15d0cf21926" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_d7e7f53b786522ae18147bb853c" FOREIGN KEY ("addedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "PK_231ae565c273ee700b283f15c1d"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_a6b3c434392f5d10ec171043666" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_7ed5659e7139fc8bc039198cc1f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP CONSTRAINT "PK_4945c6758fd65ffacda760b4ac9"`);
        await queryRunner.query(`ALTER TABLE "orders_products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "PK_4945c6758fd65ffacda760b4ac9" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_4eff63e89274f79195e25c5c115" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "UQ_cc4e4adab232e8c05026b2f345d"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "shippingAddressId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "shippingAddressId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "REL_cc4e4adab232e8c05026b2f345" UNIQUE ("shippingAddressId")`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "updatedById"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "updatedById" integer`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1102b5a0c580f845993e2f766f6" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_products" ADD CONSTRAINT "FK_823bad3524a5d095453c43286bb" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shippings" DROP CONSTRAINT "PK_665fb613135782a598a2b47e5b2"`);
        await queryRunner.query(`ALTER TABLE "shippings" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "shippings" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "shippings" ADD CONSTRAINT "PK_665fb613135782a598a2b47e5b2" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_cc4e4adab232e8c05026b2f345d" FOREIGN KEY ("shippingAddressId") REFERENCES "shippings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
