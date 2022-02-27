const User = require('../../models/User')

const DummyData = [{
    Name:"Haider",
    Email:'haider@gmail.com',
    Password:'haider456'
}]


const resolvers = {
    Query:{
        GetUser:async(parent,args)=>{
            const respUsers = await User.find()
            return respUsers
        }
    },

    Mutation: {
        AddUser:async (parent, args) => {
            const newUser = new User({
                Name:args.Name,
                Email:args.Email,
                Password:args.Password
            })
            // DummyData.push(args)
            return await newUser.save()
        }
    }
}

module.exports = resolvers