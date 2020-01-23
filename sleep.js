
export default function sleep (milliseconds) {
  return new Promise((resolve,reject) => {
    setTimeout(resolve, milliseconds)
  })
}
