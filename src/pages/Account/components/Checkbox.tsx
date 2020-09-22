import React from 'react'

import { Flex, FlexProps, Icon } from '@chakra-ui/core'

type CheckboxProps = {
	checked?: boolean
	size?: number
} & FlexProps

const Checkbox: React.FC<CheckboxProps> = ({
	checked,
	size = 32,
	...props
}) => (
	<Flex
		alignItems="center"
		justifyContent="center"
		rounded="full"
		backgroundColor="petcode.yellow.400"
		size={`${size  }px`}
		{...props}>
		{checked && (
			<Icon
				name="checkmark"
				size={`${size - 12  }px`}
				color="petcode.neutral.700"
			/>
		)}
	</Flex>
)

export default Checkbox
