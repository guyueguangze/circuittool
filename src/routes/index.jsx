import React from "react"
import { useRoutes } from "react-router-dom"
import { UserLayoutRouter } from "@/routes/modules/Layout"
export const rootRouter = [...UserLayoutRouter]
// console.log(rootRouter)
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}
export default Router
