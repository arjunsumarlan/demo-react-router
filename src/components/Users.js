import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from 'react-router-dom';
import User from './User'

function Users() {
    const history = useHistory();
    let match = useRouteMatch();

    return (
        <div>
            <h2>Users</h2>

            <div onClick={() => history.push('/')}>Go to Home</div>

            <ul>
                <li>
                    <Link to={`${match.url}/1`}>User 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/2`}>User 2</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:userId`}>
                    <User />
                </Route>
                <Route path={`${match.path}`}>
                    <h2>Please select a user.</h2>
                </Route>
            </Switch>
        </div>
    );
}

export default Users