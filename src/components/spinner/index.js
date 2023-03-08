import {HashLoader} from "react-spinners"
import './index.css'

const Spinner = () => {
    return (
        <div className="spinner">
            <HashLoader size={140} color="#2697DC"/>
        </div>
    )
}

export default Spinner