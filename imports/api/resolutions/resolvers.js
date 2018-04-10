import Resolutions from './resolutions';

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      // console.log('>>>>>>>', context);
      return Resolutions.find({userId}).fetch();
    }
  },

  Mutation: {
    createResolution(obj, {name}, { userId }) {
      // console.log(name);
      const resolutionId = Resolutions.insert({
        name,
        userId
      });
      return Resolutions.findOne(resolutionId);
    }
  }

};
