import React, { useState } from 'react'

import {
	Flex,
	Input,
	InputProps,
	Select,
	SelectProps,
	Text,
} from '@chakra-ui/core'

import { action } from 'mobx'
import { observer } from 'mobx-react'
import moment from 'moment'

import { useObserver } from 'mobx-react-lite'
import { Reminder } from '../../../Models/Reminder'
import Checkbox from './Checkbox'
import { AuthContext } from '../../../views/Auth/index'

const ReminderInput: React.FC<InputProps> = (props) => (
	<Input
		size="sm"
		variant="flushed"
		color="petcode.blue.400"
		fontSize="xl"
		fontFamily="body"
		height="auto"
		width="auto"
		display="inline"
		borderColor="petcode.neutral.400"
		_focus={{ borderColor: 'petcode.blue.400' }}
		{...props}
	/>
)

const ReminderSelect: React.FC<SelectProps> = (props) => (
	<Select
		variant="flushed"
		size="sm"
		color="petcode.blue.400"
		fontFamily="body"
		fontSize="xl"
		borderColor="petcode.neutral.400"
		paddingLeft={3}
		_focus={{ borderColor: 'petcode.blue.400' }}
		rootProps={{ width: 'auto', display: 'inline-block' }}
		{...props}
	/>
)

type ReminderItemProps = {
	reminder: Reminder
	isEditable?: boolean
	index: number
}

const ReminderItem: React.FC<ReminderItemProps> = ({
	reminder,
	isEditable = false,
	index,
}) => {
	console.log(index)

	const service = React.useContext(AuthContext)

	const [enabled, setEnabled] = useState(reminder.enabled)
	const [date, setDate] = useState(reminder.date)
	const [frequency, setFrequency] = useState(reminder.frequency)
	const [name, setName] = useState(reminder.name)
	const [notificationMethod, setNotificationMethod] = useState(
		reminder.notificationMethod
	)
	const [time, setTime] = useState(reminder.time)

	React.useEffect(() => {
		if (!isEditable) {
			console.log(index)
			service.setReminderInfo(index, {
				enabled,
				date,
				frequency,
				name,
				notificationMethod,
				time,
			})
		}

		console.log(isEditable)
	}, [
		isEditable,
		enabled,
		date,
		frequency,
		name,
		notificationMethod,
		time,
		index,
		service,
	])

	return useObserver(() => (
		<Flex direction="column" fontSize="xl">
			<Flex direction="row" alignItems="center">
				<Checkbox
					checked={enabled}
					cursor={isEditable ? 'pointer' : 'default'}
					size={22}
					onClick={action(() => isEditable && setEnabled(!enabled))}
				/>
				<Text color="petcode.blue.400" marginLeft={2}>
					{name}
				</Text>
			</Flex>
			<Text color="petcode.neutral.400" marginLeft={8}>
				{isEditable ? (
					<ReminderInput
						type="date"
						value={date}
						onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
							setDate(e.target.value)
						)}
					/>
				) : (
					moment(date).format('M/D/YY')
				)}{' '}
				@{' '}
				{isEditable ? (
					<ReminderInput
						type="time"
						value={time}
						onChange={action((e: React.ChangeEvent<HTMLInputElement>) =>
							setTime(e.target.value)
						)}
					/>
				) : (
					moment(time, 'HH:mm').format('LT')
				)}{' '}
				/{' '}
				{isEditable ? (
					<ReminderSelect
						value={frequency}
						onChange={action((e: React.ChangeEvent<HTMLSelectElement>) =>
							setFrequency(e.target.value)
						)}>
						<option>One-Time</option>
						<option>Daily</option>
						<option>Weekly</option>
						<option>Monthly</option>
					</ReminderSelect>
				) : (
					frequency
				)}{' '}
				/{' '}
				{isEditable ? (
					<ReminderSelect
						value={notificationMethod}
						onChange={action((e: React.ChangeEvent<HTMLSelectElement>) =>
							setNotificationMethod(e.target.value)
						)}>
						<option>App Notification</option>
						<option>Email</option>
					</ReminderSelect>
				) : (
					notificationMethod
				)}
			</Text>
		</Flex>
	))
}

export default ReminderItem
