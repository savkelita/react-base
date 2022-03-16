import React from 'react'
import { Nav, INavLinkGroup } from '@fluentui/react'

export const Navigation: React.FunctionComponent = () => <Nav groups={navGroups} selectedKey="demochild" />

const navGroups: INavLinkGroup[] = [
  {
    links: [
      {
        key: 'demoparent',
        name: 'Demo parent',
        url: '#demochild',
        isExpanded: true,
        links: [
          {
            name: 'Demo child',
            url: '#demochild',
            key: 'demochild',
          },
        ],
      },
      {
        key: 'demoexample',
        name: 'Demo example',
        url: '#demoexample',
      },
    ],
  },
]
