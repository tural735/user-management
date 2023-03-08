import {Alert} from "reactstrap"

const Error = ({message}) => {
    return (
        <div className="container mt-5">
            <Alert color="danger">
                {message}
            </Alert>
        </div>
    )
}
export default Error