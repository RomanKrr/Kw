import { Outlet } from "react-router-dom"
import HatComp from "./Header/HatComp"

const Blank = () => {
  return (
    <>
        <HatComp/>
        <Outlet/>
    </>
  )
}

export default Blank