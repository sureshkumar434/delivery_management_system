import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';
import ComponentRegistration from '../components/ComponentRegistration';
import IssueRegistration from '../components/IssueRegistration';
import VehicleRegistrationForm from '../components/VehicleRegistrationForm';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {   
        path: "/componentRegister",
        element: <ComponentRegistration/>
    },
    {
        path: "/issueRegister",
        element: <IssueRegistration/>
    },
    {
        path: "/vehicleRegister",
        element: <VehicleRegistrationForm/>
    }
]);

export default Routes;
