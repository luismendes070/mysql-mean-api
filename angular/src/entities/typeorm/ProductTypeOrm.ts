import {getRepository} from "typeorm";

import {Product} from "database/typeorm/entities/Product";

const user = await getRepository(Product)
    .createQueryBuilder("product")
    .where("product.product_id = :product_id", { product_id: 1 })
    .getOne();