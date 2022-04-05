// TODO implement the resolvers
const {
    ValidationError
} = require('apollo-server');
const resolvers = {
    Query: {
        order: async (_, { id }, { dataSources }) => {
            if (!id) {
                throw new ValidationError('Invalid argument value', {
                    argumentName: 'id'
                });
            }
            const data = await dataSources.db.getOrder(`${id}`);
            return data;
        },
        orders: async (_, { status }, { dataSources }) => {
            if (status) {
                if (!['PENDING',
                    'IN_PROGESS',
                    'IN_DELIVERY',
                    'DELIVERED',
                    'PAID'].includes(status)) {
                    throw new ValidationError('Invalid argument value', {
                        argumentName: 'id'
                    });
                }
                const query = `SELECT * FROM orders WHERE status='${status}'`;
                return await dataSources.db.executeQuery(query);
            } else {
                return await dataSources.db.getOrders();
            }
        },
    },
    Mutation: {
        updateStatus: async (_, { id, status }, { dataSources }) => {
            if (!id || !status) {
                throw new ValidationError('Invalid argument value', {
                    argumentName: 'id'
                });
            }
            if (!['PENDING',
                'IN_PROGESS',
                'IN_DELIVERY',
                'DELIVERED',
                'PAID'].includes(status)) {
                throw new ValidationError('Invalid argument value', {
                    argumentName: 'id'
                });
            }
            await dataSources.db.updateOrderStatus(id, status);
            const dataOne = await dataSources.db.getOrder(`${id}`);
            return dataOne

        }
    }
};

module.exports = resolvers;
