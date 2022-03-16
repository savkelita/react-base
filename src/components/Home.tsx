import React, { useState } from 'react'
import { Stack, CommandButton, IconButton, Text, Icon } from '@fluentui/react'
import { Navigation } from './Navigation'
import { Info } from './Info'

export const Home: React.FunctionComponent = () => {
  const [showNav, setShowNav] = useState(true)

  return (
    <Stack horizontal={true} styles={{ root: { height: '100%', overflow: 'hidden' } }}>
      <Stack
        styles={{
          root: { ...(!showNav ? { marginLeft: '-17rem' } : undefined), minWidth: '17rem', backgroundColor: '#f3f2ef' },
        }}
      >
        <Stack
          horizontalAlign="center"
          tokens={{ childrenGap: 5, padding: '20px 5px' }}
          styles={{ root: { textAlign: 'center' } }}
        >
          <Icon iconName="World" styles={{ root: { fontSize: 36 } }} />
          <Text styles={{ root: { fontSize: 12, fontWeight: 'bold' } }}>Demo Application</Text>
        </Stack>
        <Stack.Item grow={1}>
          <Navigation />
        </Stack.Item>
      </Stack>
      <Stack grow={1} styles={{ root: { height: '100%', overflow: 'hidden' } }}>
        <Stack
          horizontal={true}
          horizontalAlign="space-between"
          verticalAlign="center"
          styles={{ root: { position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#0078d4', minHeight: 40 } }}
        >
          <Stack horizontal={true} verticalAlign="center" tokens={{ padding: '0px 10px' }}>
            <IconButton
              title={showNav ? 'Hide Navigation' : 'Show Navigation'}
              styles={{
                root: { color: '#fff' },
                rootHovered: { color: '#fff', backgroundColor: '#006cbe' },
                rootPressed: { color: '#fff', backgroundColor: '#006cbe' },
              }}
              iconProps={{ iconName: 'GlobalNavButton' }}
              // tslint:disable-next-line: jsx-no-lambda
              onClick={() => setShowNav(!showNav)}
            />
          </Stack>
          <CommandButton
            styles={{
              icon: { color: '#fff' },
              iconHovered: { color: '#fff' },
              iconChecked: { color: '#fff' },
              iconPressed: { color: '#fff' },
              menuIcon: { color: '#fff' },
              root: { color: '#fff', backgroundColor: 'transparent', borderRadius: 0 },
              rootHovered: { color: '#fff' },
              rootChecked: { backgroundColor: 'transparent', color: '#fff' },
              rootExpanded: { backgroundColor: '#006cbe', color: '#fff' },
              rootPressed: { backgroundColor: '#006cbe', color: '#fff' },
            }}
            iconProps={{ iconName: 'Contact' }}
            text="Marko Savic"
            menuProps={{
              items: [
                {
                  key: 'changePassword',
                  text: 'Change password',
                  iconProps: {
                    iconName: 'PasswordField',
                  },
                  onClick: () => undefined,
                },
                {
                  key: 'logout',
                  text: 'Logout',
                  iconProps: {
                    iconName: 'SignOut',
                  },
                  onClick: () => undefined,
                },
              ],
            }}
          />
        </Stack>
        <Stack grow={1} styles={{ root: { overflow: 'auto' } }} tokens={{ padding: 10 }}>
          <Stack tokens={{ childrenGap: 20 }}>
            <Stack tokens={{ childrenGap: 10 }}>
              <Stack
                horizontal={true}
                horizontalAlign="space-between"
                verticalAlign="center"
                tokens={{ childrenGap: 10 }}
                wrap={true}
              >
                <Stack>
                  <Text styles={{ root: { fontSize: 20, fontWeight: 'bold', color: '#0078d4' } }}>Profile heading</Text>
                  <Text styles={{ root: { fontSize: 12, color: '#191919' } }}>
                    Some description here / ID: <b>10101023</b> / Public ID: <b>1235676</b>
                    <b>07032609</b> / State: <b>Active</b>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack tokens={{ childrenGap: 5 }}>
              <Info title="Web address" text="https://savkelita.github.io/" iconName="World" />
              <Info title="E-Mail" text="random@mail.com" iconName="Mail" />
              <Info title="Phone" text="+381 123 123 123" iconName="Phone" />
              <Info title="Fax" text="+381 123 999 123" iconName="Fax" />
              <Info title="Location" text="35 Paris Hill St.Hamden, CT 06514" iconName="MapPin" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
