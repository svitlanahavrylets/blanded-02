import createHttpError from 'http-errors';

export const validateBody = (productsSchema) => {
  return async (req, res, next) => {
    try {
      await productsSchema.validateAsync(req.body, {
        abortEarly: false,
      }),
        next();
    } catch (error) {
      const err = createHttpError(400, 'Bad Request', {
        errors: error.details,
      });
      next(err);
    }
  };
};
