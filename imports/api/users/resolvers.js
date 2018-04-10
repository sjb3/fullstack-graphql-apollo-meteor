export default {
  Query: {
    user(obj, args, { user }) {
      // console.log('>>>>>>>', context);
      return user || {};
    }
  }
}