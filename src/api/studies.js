import { STUDIES } from "../constants/studies"


export const getStudies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(STUDIES)
    }, 500)
  })
}
