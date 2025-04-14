import { ADDRESSES } from "../constants/address"


export const getAddresses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ADDRESSES)
    }, 500)
  })
}
