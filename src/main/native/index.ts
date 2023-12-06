import koffi from 'koffi'
import path from 'path'

const resolveBuildResourcesPath = (pathData:string) => {
  return import.meta.env.MODE === "dev" ? path.resolve(
    __dirname,
    pathData
  ) : path.resolve(
    __dirname,
    `../${pathData}`
  )
}


export const callNativeSumByDylib = (a:number,b:number) => {
  return ''
}

export const callNativeSumByRustnode = (a:number,b:number) => {
  return ''
}

export const callNativeSubtractionByRustnode  = (a:number,b:number) => {
  return ''
}