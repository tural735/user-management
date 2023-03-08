import {QueryClient, QueryClientProvider} from "react-query";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ToastContainer position="top-right"/>
        </QueryClientProvider>
    );
}

export default App;
