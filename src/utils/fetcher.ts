/* eslint-disable @typescript-eslint/no-unsafe-argument */
const fetcher = async (...args: any[]): Promise<Response> =>
  await fetch(...(args as [any]))
    .then(async (res) => {
      if (!res.ok) {
        const err = new Error('HTTP status code: ' + res.status);
        throw err;
      }
      return await res.json();
    })
    .catch((e) => {
      throw new Error(e);
    });

export default fetcher;
