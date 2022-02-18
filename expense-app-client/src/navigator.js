import App from "./App";
import HomeView from 'views/homeView'
import AddExpenseView from 'views/addExpenseView'
import SettingsView from 'views/settingsView'
import { Route, Routes, BrowserRouter } from "react-router-dom"
const Navigator = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element ={<App />} >
                        <Route path="home" element={<HomeView />} />
                        <Route path="addExpanse" element={<AddExpenseView />} />
                        <Route path="settings" element={<SettingsView />} />
                    </Route>
                </Routes>
        </BrowserRouter>
            )
}
export default Navigator