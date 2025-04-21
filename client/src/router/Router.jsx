import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Login from '../pages/login/login';
import Orders from '../pages/orders/Orders';
import Redirect from '../pages/redirect/Redirect';
import Register from '../pages/register/Register';
import ProtectedVendorRoute from './ProtectedVendorRoutes';
import ProtectedUserRoute from './ProtectedUserRoutes';
import ProtectedRoute from './ProtectedRoutes';
import AboutUs from '../pages/aboutUs/AboutUs';
import Contact from '../pages/contact/Contact';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/redirect' element={<Redirect />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />

				<Route path='/about' element={<AboutUs />} />
				<Route path='/contact' element={<Contact />} />
				<Route element={<ProtectedVendorRoute />}></Route>
				<Route element={<ProtectedUserRoute />}>
					<Route path='/orders/:id' element={<Orders />} />
				</Route>
				<Route element={<ProtectedRoute />}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
