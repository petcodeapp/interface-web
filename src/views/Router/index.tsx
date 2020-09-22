import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { motion } from 'framer-motion'
import LandingPage from '../../pages/Landing'
import LoginPage from '../../pages/Login'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import RegistrationPage from '../../pages/Registration'
import ForgotPasswordPage from '../../pages/ForgotPassword'
import DashboardPage from '../../pages/Account/DashboardPage'
import ContactInfoPage from '../../pages/Account/ContactInfoPage'
import PetInfoPage from '../../pages/Account/PetInfoPage'
import RemindersPage from '../../pages/Account/RemindersPage'
import MedicalInfoPage from '../../pages/Account/MedicalInfoPage'
import ScanLocationsPage from '../../pages/Account/ScanLocationsPage'

const pageVariants = {
	initial: {
		opacity: 0,
	},
	in: {
		opacity: 1,
		transition: {
			delayChildren: 0.5,
		},
	},
	out: {
		opacity: 0,
	},
}
export const subPageVariants = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

const PageAnim: React.FC = (props) => (
	<motion.div
		style={{ display: 'inline' }}
		initial="initial"
		exit="out"
		animate="in"
		variants={pageVariants}>
		{props.children}
	</motion.div>
)

const Routes = () =>
	useObserver(() => (
		<>
			<PublicRoute restricted path="/signup">
				<PageAnim>
					<RegistrationPage />
				</PageAnim>
			</PublicRoute>

			<PublicRoute restricted path="/login">
				<PageAnim>
					<LoginPage variants={subPageVariants} />
				</PageAnim>
			</PublicRoute>

			<PublicRoute restricted path="/forgotpassword">
				<PageAnim>
					<ForgotPasswordPage />
				</PageAnim>
			</PublicRoute>

			<PrivateRoute path="/dashboard">
				<PageAnim>
					<DashboardPage />
				</PageAnim>
			</PrivateRoute>

			<PrivateRoute path="/contactinfo">
				<PageAnim>
					<ContactInfoPage />
				</PageAnim>
			</PrivateRoute>

			<PrivateRoute path="/petinfo">
				<PageAnim>
					<PetInfoPage />
				</PageAnim>
			</PrivateRoute>

			<PrivateRoute path="/reminders">
				<PageAnim>
					<RemindersPage variants={subPageVariants} />
				</PageAnim>
			</PrivateRoute>

			<PrivateRoute path="/medicalinfo">
				<PageAnim>
					<MedicalInfoPage />
				</PageAnim>
			</PrivateRoute>

			<PrivateRoute path="/scanlocations">
				<PageAnim>
					<ScanLocationsPage />
				</PageAnim>
			</PrivateRoute>

			<PublicRoute path="/about">{/* TODO: Create about page */}</PublicRoute>

			<PublicRoute exact path="/">
				<PageAnim>
					<LandingPage />
				</PageAnim>
			</PublicRoute>
		</>
	))

export default Routes
