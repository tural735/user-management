import {Link, useRouteError} from "react-router-dom";
import NotFound from '../assets/images/not-found.png'

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page">
            <img src={NotFound} alt={error.message}/>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link class="btn btn-outline-primary" to="/">Back to Home</Link>
        </div>
    );
}