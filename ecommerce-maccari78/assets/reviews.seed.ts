import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewEntity } from 'src/reviews/entities/review.entity';

@Injectable()
export class ReviewsSeeder {
    constructor(
        @InjectRepository(ReviewEntity)
        private readonly reviewsRepository: Repository<ReviewEntity>,
    ) { }

    async seed() {
        // console.log('Seeding reviews...');
        const reviewsData = [
            {
                ratings: 4,
                comment: "good",
                createdAt: "2024-04-13 18:06:59.830197",
                updatedAt: "2024-04-13 18:06:59.830197",
                id: "38812faf-c61f-4145-a661-a97f94f060e8",
                userId: "422a976a-0b85-49b3-afc1-f41faecc5259",
                productId: "f73d4678-3a03-42f6-931a-5332d06dfc49"
            },
            {
                ratings: 2,
                comment: "so so",
                createdAt: "2024-04-13 18:06:59.830197",
                updatedAt: "2024-04-13 18:06:59.830197",
                id: "67a48c67-8368-4c82-9f20-174966ea7495",
                userId: "422a976a-0b85-49b3-afc1-f41faecc5259",
                productId: "91d1d990-efa1-445d-b490-9ac8b9cdd237"
            },
            {
                ratings: 4,
                comment: "very good",
                createdAt: "2024-04-13 18:06:59.830197",
                updatedAt: "2024-04-13 18:06:59.830197",
                id: "6f4d85ad-2f73-4cc4-8e43-b6de7ca10f72",
                userId: "422a976a-0b85-49b3-afc1-f41faecc5259",
                productId: "f73d4678-3a03-42f6-931a-5332d06dfc49"
            },
            {
                ratings: 5,
                comment: "fantastic",
                createdAt: "2024-04-13 18:06:59.830197",
                updatedAt: "2024-04-13 18:06:59.830197",
                id: "94591453-e8a4-491c-90d8-d6127c979770",
                userId: "422a976a-0b85-49b3-afc1-f41faecc5259",
                productId: "f73d4678-3a03-42f6-931a-5332d06dfc49"
            },
            {
                ratings: 3,
                comment: "medium",
                createdAt: "2024-04-13 18:06:59.830197",
                updatedAt: "2024-04-13 18:06:59.830197",
                id: "af23e658-fa35-40d9-86d9-eb925c4ed4ef",
                userId: "422a976a-0b85-49b3-afc1-f41faecc5259",
                productId: "91d1d990-efa1-445d-b490-9ac8b9cdd237"
            }
        ];

        for (const reviewData of reviewsData) {
            const existingReview = await this.reviewsRepository.findOne({ where: { id: reviewData.id } });

            if (!existingReview) {
                await this.reviewsRepository.save(reviewData);
            }
        }
    }
}