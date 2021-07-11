const BASE_URL = 'http://localhost:5000/api/v1/'

export default async function (url, settings) {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    ...settings
  })

  if (response.ok === false) {
    throw await response.json()
  }

  return await response.json()
}