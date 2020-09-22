import React from 'react'

import { Flex } from '@chakra-ui/core'

import { motion } from 'framer-motion'
import Header from '../../../components/Shared/header'
import Sidebar from './Sidebar'

const F = motion.custom(Flex)

const AccountPageLayout: React.FC<any> = ({ children, variants }) => (
	<F
		variants={variants}
		direction="column"
		minHeight="calc(100% - 57px)"
		paddingTop="57px">
		<Header backgroundColor="petcode.neutral.700" />
		<Flex direction="row" flexGrow={1}>
			<Sidebar />
			{children}
		</Flex>
	</F>
)

export default AccountPageLayout
