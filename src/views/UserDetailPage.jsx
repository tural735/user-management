import * as yup from "yup";
import {useNavigate, useParams} from "react-router-dom"
import {FiArrowLeftCircle} from "react-icons/fi";
import Error from "../components/error";
import {Button, Card, CardBody} from "reactstrap";
import {Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {useEditPost, useGetSinglePostById} from "../hooks/postHooks";
import Spinner from "../components/spinner";

const schema = yup.object().shape({
    name: yup.string().required("Tələb olunur"),
    username: yup.string().required("Tələb olunur"),
    phone: yup.string().required("Tələb olunur"),
    email: yup.string().required("Tələb olunur").email("Yalnış yazılış formasi nümunə mail@mail.com"),
});

const userInfos = {
    name: "",
    username: "",
    phone: "",
    email: "",
}
const UserDetailPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [user, setUser] = useState(userInfos)
    const {name, username, phone, email} = user
    const {isLoading, data, isError, error} = useGetSinglePostById(id)
    const {mutate} = useEditPost(id)

    useEffect(() => {
        setUser({
            name: data?.name ?? '',
            username: data?.username ?? "",
            phone: data?.phone ?? "",
            email: data?.email ?? ""
        })
    }, [data])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    if (isLoading) {
        return <Spinner/>
    }

    if (isError) {
        return <Error message={error.message}/>
    }

    const submitHandlers = () => {
        mutate(user)
    }
    return (
        <div className="container mt-5">
            <FiArrowLeftCircle className="cursor-pointer" size={50} onClick={() => navigate('/')}/>
            <div className="w-75 mx-auto mt-5">
                <Card>
                    <CardBody>
                        <Formik
                            enableReinitialize
                            initialValues={user}
                            validationSchema={schema}
                            onSubmit={submitHandlers}
                        >
                            {({errors, touched}) => (
                                <Form>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="name">
                                            Ad
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            value={name}
                                            onChange={handleChange}
                                        />
                                        {touched.name && errors.name ? (
                                            <div className="form-error text-danger">{errors.name}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="username">
                                            Soyad
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            id="username"
                                            value={username}
                                            onChange={handleChange}
                                        />
                                        {touched.username && errors.username ? (
                                            <div className="form-error text-danger">{errors.username}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="phone">
                                            Telefon
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            value={phone}
                                            onChange={handleChange}
                                        />
                                        {touched.phone && errors.phone ? (
                                            <div className="form-error text-danger">{errors.phone}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-1">
                                        <label className="form-label" htmlFor="email">
                                            E-poct
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={handleChange}
                                        />
                                        {touched.email && errors.email ? (
                                            <div className="form-error text-danger">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="mb-1 mt-3 d-flex justify-content-between">
                                        <Button
                                            color="secondary"
                                            outline
                                            onClick={() => {
                                                setUser(userInfos);
                                            }}
                                        >
                                            Ləğv et
                                        </Button>
                                        <Button type="submit" color="primary">
                                            Təsdiqlə
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default UserDetailPage