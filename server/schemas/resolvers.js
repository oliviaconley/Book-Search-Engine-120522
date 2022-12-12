const { User, Book } = require('../models');
const { countDocuments } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
            users: async() => {
                return User.find()
            },
            me: async (parent, args, context) => {
                if (context.user) {
                  return await User.findOne({ _id: context.user._id })
                }
                throw new AuthenticationError('Wrong')
            }
    }, 
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        saveBook: async (parent, { bookData }, context) => {
          if (context.user) {
            return User.findOneAndUpdate({ _id: context.user._id }, { $push: { savedBooks: bookData }}, 
              { new: true }) //adding new info to the array
          }
          throw new AuthenticationError('Wrong')
          }, 
        deleteBook: async (parent, args, context) => {
          if (context.user) {
            return User.findByIdAndUpdate({ _id: context.user._id }, { $pull: { savedBooks: bookData }},
              { new: true } )
          }
          throw new AuthenticationError('Wrong')
        }
    }
};

module.exports = resolvers;