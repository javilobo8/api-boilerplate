export const expectReject = (promise: Promise<unknown>) => {
  const execPromise = async (): Promise<Error> => {
    try {
      await promise;
      throw new Error('Promise should be rejected');
    } catch (error) {
      return error as Error;
    }
  };

  const toReject = async (rejection: ErrorConstructor | string) => {
    const error = await execPromise();

    if (typeof rejection === 'string') {
      expect(error.name).toBe(rejection);
    }

    return error;
  };

  return {
    toReject,
  };
};
