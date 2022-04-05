// TODO implement the resolvers

const resolvers = {
    Query: {
        order: async (_, { id }, { dataSources }) => {
            const data = await dataSources.db.getOrders();
            console.log(data);
            return { order: data };
        },
    },
};

module.exports = resolvers;
