import { CategoryEntity } from "src/categories/entities/category.entity";
import { OrdersProductsEntity } from "src/orders/entities/orders-products.entity";
import { ReviewEntity } from "src/reviews/entities/review.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'products' })
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    price: number

    @Column()
    stock: number

    @Column('simple-array')
    images: string

    @CreateDateColumn()
    createdAt: Timestamp

    @UpdateDateColumn()
    updatedAt: Timestamp

    @ManyToOne(() => UserEntity, (user) => user.products)
    addedBy: UserEntity

    @ManyToOne(() => CategoryEntity, (cat) => cat.products)
    category: CategoryEntity

    @OneToMany(() => ReviewEntity, (rev) => rev.product)
    reviews: ReviewEntity[]

    @OneToMany(() => OrdersProductsEntity, (op) => op.product)
    products: OrdersProductsEntity[]

    @BeforeInsert()
    async generateUUID() {
        this.id = uuidv4();
    }
}
