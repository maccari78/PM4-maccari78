import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { OrderEntity } from "./order.entity";
import { ProductEntity } from "src/products/entities/product.entity";

@Entity({ name: "orders_products" })
export class OrdersProductsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    product_unit_price: number

    @Column()
    product_quantity: number

    @ManyToOne(()=>OrderEntity, (order)=>order.products)
    order:OrderEntity

    @ManyToOne(()=>ProductEntity, (prod)=>prod.products,{cascade:true})
    product:ProductEntity

    @BeforeInsert()
    async generateUUID() {
        this.id = uuidv4();
    }
}