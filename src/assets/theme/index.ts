import { PartialTheme, mergeStyles, ComponentsStyles } from '@fluentui/react'

mergeStyles({
  selectors: {
    ':global(*)': {
      margin: 0,
      padding: 0,
    },
    ':global(html), :global(body), :global(#root)': {
      height: '100%',
    },
  },
})

const componentsStyles: ComponentsStyles = {
  Dropdown: {
    styles: {
      dropdown: {
        ':hover .ms-Dropdown-title': {
          borderColor: '#c2c2c2',
        },
      },
    },
  },
  TextField: {
    styles: {
      subComponentStyles: {
        label: {
          root: {
            fontWeight: 'normal',
          },
        },
      },
    },
  },
  DetailsHeader: {
    styles: {
      root: {
        lineHeight: 30,
        height: 30,
        selectors: {
          '.ms-DetailsHeader-cellName': {
            fontSize: 13,
          },
          '.ms-DetailsHeader-cell': {
            height: 30,
          },
        },
        backgroundColor: '#f3f2ef',
        paddingTop: 0,
      },
    },
  },
  DetailsRow: {
    styles: {
      cell: {
        lineHeight: '20px',
      },
    },
  },
  DetailsList: {
    styles: {
      focusZone: {
        selectors: {
          '.dropdown-inside-column': {
            visibility: 'hidden',
          },
          '.ms-DetailsRow:hover .dropdown-inside-column': {
            visibility: 'visible',
            backgroundColor: '#eaeaea',
          },
          '.ms-DetailsRow:hover .dropdown-inside-column:hover': {
            backgroundColor: '#dddddd',
          },
          '.is-selected .dropdown-inside-column': {
            visibility: 'visible',
            backgroundColor: 'transparent',
          },
          '.dropdown-inside-column-wrapper': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          '.dropdown-inside-column-wrapper > span': {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
          '.ms-DetailsRow': {
            borderBottom: '1px solid #f3f2f1',
          },
        },
      },
    },
  },
}

export const defaultTheme: PartialTheme = {
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#fafafa',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
  semanticColors: {
    inputBorder: '#c2c2c2',
    inputBorderHovered: '#c2c2c2',
  },
  components: { ...componentsStyles },
}

export const grayTheme: PartialTheme = {
  ...defaultTheme,
  palette: {
    themePrimary: '#f4f4f4',
  },
}
