import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export default function Pagination(props) {
    return (<div style={{height:100}}>
        <Stack direction="row" spacing={2} style={{justifyContent:'center',marginTop:50}}>
        {props.gotoPrevPage ? (<Button variant="contained" onClick={props.gotoPrevPage} startIcon={<NavigateBeforeIcon />}>
        Previous
        </Button>):(<Button variant="contained" disabled startIcon={<NavigateBeforeIcon />}>Previous</Button>)}
        {props.gotoNextPage &&  (<Button  onClick={props.gotoNextPage} variant="contained" endIcon={<NavigateNextIcon />}>
        Next
        </Button>)}

      </Stack>
      </div>
    )
}
