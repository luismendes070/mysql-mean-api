
test('create product', async () => {
    expect.assertions(1);
    const product = await db.tblProduct.create({
        product_id: 1,
    });
    expect(product.product_id).toEqual(1);
});

test('delete product', async () => {
    expect.assertions(1);
    await db.Person.destroy({
        where: {
            id: 1
        }
    });
    const person = await db.Person.findByPk(1);
    expect(person).toBeNull();
});




