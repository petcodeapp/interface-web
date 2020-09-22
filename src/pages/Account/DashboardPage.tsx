import React from 'react'

import { Box, Flex, Image, Stack, Text } from '@chakra-ui/core'
import QRCode from 'qrcode.react'

import { withTheme } from 'emotion-theming'
import { useObserver } from 'mobx-react'
import AccountPageLayout from './components/AccountPageLayout'
import { InfoFieldText, InfoFieldLabel } from './components/InfoField'
import ReminderItem from './components/ReminderItem'
import { AuthContext } from '../../views/Auth/index'

const DashboardPage = withTheme(({ theme }) => {
	const service = React.useContext(AuthContext)

	return useObserver(() => (
		<AccountPageLayout>
			<Stack
				flexGrow={1}
				backgroundColor="petcode.neutral.200"
				padding={10}
				spacing={5}>
				<Flex
					direction="row"
					alignItems="center"
					rounded="lg"
					backgroundColor="#F3C66B"
					backgroundImage="url(/media/paw-icon.png)"
					backgroundRepeat="no-repeat"
					backgroundPosition="0% 50%"
					width="100%">
					<Flex direction="column" marginLeft={40}>
						<Text color="petcode.neutral.700" fontSize="5xl" fontWeight="bold">
							{service.pets[0]?.name}
						</Text>
						<Text color="petcode.neutral.500" fontSize="2xl" fontWeight="thin">
							{service.pets[0]?.breed}{' '}
							{service.pets[0]?.contacts[0]?.name.value}
						</Text>
					</Flex>
					<Box flexGrow={1} />
					<Image
						rounded="lg"
						alt="Dog on yellow background"
						src={service.pets[0]?.profileUrl}
					/>
				</Flex>
				<Stack isInline justifyContent="space-between" spacing={5}>
					<Flex
						direction="row"
						rounded="lg"
						backgroundColor="white"
						flexBasis="50%"
						padding={6}>
						<Flex direction="column" marginRight={4}>
							<Text color="petcode.neutral.700" fontSize="3xl">
								Max's Code
							</Text>
							<Text color="petcode.neutral.500" fontSize="xl" fontWeight="thin">
								Scan this code to view your pet's public profile.
							</Text>
						</Flex>
						<Box alignSelf="center">
							<QRCode
								value="https://petcodeusa.com"
								size={200}
								fgColor={theme.colors.petcode.blue[400]}
							/>
						</Box>
					</Flex>
					<Flex
						direction="column"
						rounded="lg"
						backgroundColor="white"
						flexBasis="50%"
						padding={6}>
						<Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
							Account Information
						</Text>
						<Box>
							<InfoFieldText>{service.user?.displayName}</InfoFieldText>
							<InfoFieldLabel>Name</InfoFieldLabel>
						</Box>
						<Box>
							<InfoFieldText>{service.user?.email}</InfoFieldText>
							<InfoFieldLabel>Email</InfoFieldLabel>
						</Box>
						<Box>
							<InfoFieldText>*******</InfoFieldText>
							<InfoFieldLabel>Password</InfoFieldLabel>
						</Box>
						<Box>
							<InfoFieldText>{service.pets[0]?.name}</InfoFieldText>
							<InfoFieldLabel>Pet Name</InfoFieldLabel>
						</Box>
					</Flex>
				</Stack>
				{service.pets[0]?.reminders.length > 0 && (
					<Flex
						direction="column"
						rounded="lg"
						backgroundColor="white"
						flexBasis="100%"
						padding={6}>
						<Text color="petcode.neutral.700" fontSize="3xl" marginBottom={3}>
							Reminders
						</Text>
						{service.pets[0]?.reminders.map((reminder: any, idx: number) => (
							<ReminderItem index={idx} reminder={reminder} />
						))}
					</Flex>
				)}
			</Stack>
		</AccountPageLayout>
	))
})

export default DashboardPage
