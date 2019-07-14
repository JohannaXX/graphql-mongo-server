import { Product } from "./models/Product";

const productsTypeMatcher = {
    GAMING_PC: 'GamingPc',
    BIKE: 'Bike',
    DRONE: 'Drone'
};

export const resolvers = {
    Query: {
        getProducts: async () => await Product.find({}).exec(),
        product: async(_, {name}) => await Product.findOne({name}).exec()
    },
    Mutation: {
        createProduct: (_, {name, type, price, description, liquidCooled, bikeType, range}) => {
            const product = new Product({name, type, price, description, liquidCooled, bikeType, range});
            return product.save();
        },
        deleteProduct: async(_, {name}) => await Product.findOneAndDelete({name}).exec(),
        updateProduct: async(_, {name, price, type, description, liquidCooled, bikeType, range}) => await       Product.findOneAndUpdate({name},{price, type, description, liquidCooled, bikeType, range}).exec()
    },
    Product: {
        __resolveType(product) {
          return productsTypeMatcher[product.type]
        }
    }
}
