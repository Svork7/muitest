import { TextField } from '@mui/material'
import Box from '@mui/material/Box'

export const Search = () => {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Поиск"
        variant="outlined"
        fullWidth
        type="search"
      />
      {/*<TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    */}
    </Box>
  )
}
