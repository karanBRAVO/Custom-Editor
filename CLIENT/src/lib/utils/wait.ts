export const _wait = async (promise: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 5000);
  }).then(() => promise);
};
