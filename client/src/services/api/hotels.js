import http from "../http"

export const getAllHotels = async () => {
  return await http('hotels')
}

export const getHotelById = async id => {
  return await http(`hotels/${id}`)
}

export const createHotel = async body => {
  return await http(`hotels`, {
    method: 'POST',
    body: JSON.stringify(body)
  })
}