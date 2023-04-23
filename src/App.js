import React,{useState} from "react"
import Home from "./views/Home"
import Completed from "./views/completed"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksProvider } from "./providers/taskProviders";

function App() {

    return (
        <TasksProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/completed" element={<Completed />} />
                </Routes>
            </BrowserRouter>      
        </TasksProvider>
    )
}
export default App