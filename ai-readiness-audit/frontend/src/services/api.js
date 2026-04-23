import axios from "axios"

const API = axios.create({

  baseURL:
    "http://127.0.0.1:8000"
})

export const analyzeWebsite =
async (url) => {

  const response =
    await API.post(

      "/audit",

      { url }
    )

  return response.data
}