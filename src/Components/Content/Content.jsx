import { Route, Routes } from "react-router-dom"
import DemoFive from "../DemoFive/DemoFive"
import DemoFour from "../DemoFour/DemoFour"
import DemoOne from "../DemoOne/DemoOne"
import DemoSix from "../DemoSix/DemoSix"
import DemoThree from "../DemoThree/DemoThree"
import DemoTwo from "../DemoTwo/DemoTow"
import Login from "../Login/Login"

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DemoOne />}></Route>
        <Route path="/demotwo" element={<DemoTwo />}></Route>
        <Route path="/demothree" element={<DemoThree />}></Route>
        <Route path="/demofour" element={<DemoFour />}></Route>
        <Route path="/demofive" element={<DemoFive />}></Route>
        <Route path="/demosix" element={<DemoSix />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default Content
