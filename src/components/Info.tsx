import React from 'react'
import { Stack, Icon, Text } from '@fluentui/react'

type Props = {
  title: string
  text: string
  iconName: string
}
export const Info: React.FunctionComponent<Props> = ({ title, text, iconName }: Props) => {
  return (
    <Stack horizontal={true} verticalAlign="center" tokens={{ childrenGap: 10 }}>
      <Stack.Item
        styles={{
          root: {
            width: 32,
            height: 32,
            backgroundColor: '#f4f4f4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Icon iconName={iconName} styles={{ root: { fontSize: 20 } }} />
      </Stack.Item>
      <Stack>
        <Stack.Item>
          <Text>{text}</Text>
        </Stack.Item>
        <Stack.Item>
          <Text styles={{ root: { fontSize: 12, color: '#9a9a9a' } }}>{title}</Text>
        </Stack.Item>
      </Stack>
    </Stack>
  )
}
