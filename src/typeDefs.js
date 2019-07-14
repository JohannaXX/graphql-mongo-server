import { gql } from "apollo-server-express";

export const typeDefs = gql `

    enum ProductType {
        GAMING_PC
        BIKE
        DRONE
    }

    enum BikeType {
        KIDS
        MOUNTAIN
        ELECTRIC
        BEACH
    }
    
    interface Product {
        id: ID
        name: String!
        price: Int
        type: ProductType
        description: String
    }

    type GamingPc implements Product {
        id: ID
        name: String!
        price: Int
        image: String
        type: ProductType
        description: String
        liquidCooled: Boolean
    }
        
    type Bike implements Product {
        id: ID
        name: String!
        price: Int
        image: String
        type: ProductType
        description: String
        bikeType: BikeType
    }
        
    type Drone implements Product {
        id: ID
        name: String!
        price: Int
        image: String
        type: ProductType
        description: String
        range: String
    }

    input NewProductInput {
        id: ID
        name: String!
        price: Int
        type: ProductType
        description: String
        liquidCooled: Boolean
        bikeType: BikeType
        range: String
    }

    input UpdateProductInput {
        id: ID
        name: String!
        price: Int
        type: ProductType
        description: String
        liquidCooled: Boolean
        bikeType: BikeType
        range: String
    }
      
    type Query {
        getProducts(id: ID, name: String, price: Int, type: String, description: String, liquidCooled: Boolean, bikeType: String, range: String): [Product]
        product(name: String): Product!
    }

    type Mutation {
        createProduct(id: ID, name: String, price: Int, type: String, description: String, liquidCooled: Boolean, bikeType: String, range: String): Product!

        deleteProduct(name: String): Product!

        updateProduct(id: ID, name: String, price: Int, type: String, description: String, liquidCooled: Boolean, bikeType: String, range: String): Product!
    }
`;
