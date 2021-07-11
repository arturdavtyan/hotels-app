import http from "../http"

export const createFeedback = async body => {
  return await http(`feedback`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
}