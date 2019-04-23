
const resolvers = {
    Query: {
      users: async (parent,args,{tUsers}) => {
        return await tUsers.findAll();
      },
    },
  };


  export default resolvers 