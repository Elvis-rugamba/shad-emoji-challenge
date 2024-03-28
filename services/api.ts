export const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status > 200) {
        throw data
      }

      return data
    })
