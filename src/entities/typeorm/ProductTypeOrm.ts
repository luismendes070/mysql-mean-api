import {getRepository} from "typeorm";

import {Product} from "database/typeorm/entities/Product";

const user = await getRepository(Product)
    .createQueryBuilder("product")
    .where("product.id = :id", { product.id: 1 })
    .getOne();