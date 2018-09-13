export default {
  RequireAuth: (ctx, next) => {
    if (!ctx.isAuthenticated()) {
      // Unauthenticated

      const response = {
        success: false,
        message: 'Authentication required',
      };
      ctx.status = 401;
      ctx.body = JSON.stringify(response);

      return false;
    }
    return next(ctx);
  },
};
