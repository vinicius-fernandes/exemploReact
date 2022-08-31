import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Cars from "./Pages/Car";
import NotFound from "./Pages/NotFound";
import Auth from "./Pages/Auth";
import Users from "./Components/Users";
import ToDoList from "./Components/ToDoList/ToDoList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="carros" element={<Cars/>}/>
                  <Route path="auth" element={<Auth/>}/>
                  <Route path="*" element={<NotFound/>}/>
                  <Route path="users" element={<Users/>}/>
                  <Route path="todolist" element={<ToDoList/>}/>
          </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
