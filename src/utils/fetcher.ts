const fetcher = (...args: any[]) =>
    fetch(...(args as [any]))
      .then((res) => {
        if (!res.ok) {
          let err = new Error('HTTP status code: ' + res.status)
          throw err
        }
        return res.json()
      })
      .catch((e) => {
        throw new Error(e)
      })
  
  export default fetcher