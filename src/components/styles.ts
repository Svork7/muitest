import { SxProps } from '@mui/system'

export const drawerWidth = 240

export const appBarStyles: SxProps = {
  width: { md: `calc(100% - ${drawerWidth}px)` },
  ml: { md: `${drawerWidth}px` },
}

export const drawerPaperStyles: SxProps = {
  boxSizing: 'border-box',
  width: drawerWidth,
}

export const mainStyles: SxProps = {
  flexGrow: 1,
  p: 3,
  width: { md: `calc(100% - ${drawerWidth}px)` },
}
