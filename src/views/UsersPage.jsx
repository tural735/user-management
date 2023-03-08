import {Card, CardBody, CardHeader} from "reactstrap"
import {UserTable} from "../components/users/UserTable"
import {AiOutlineUserAdd} from 'react-icons/ai'
import {Link} from "react-router-dom";


const UserPage = () => {
    return (
        <div className="container mt-5">
            <Card className="align-bottom">
                <CardHeader className="d-flex justify-content-end">
                    <Link to="/user/create" className="btn btn-primary"><AiOutlineUserAdd size={20}/> Əlavə et</Link>
                </CardHeader>
                <CardBody>
                    <UserTable/>
                </CardBody>
            </Card>
        </div>
    )
}


export default UserPage