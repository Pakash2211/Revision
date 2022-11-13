import {FormControl,TextField,Select,InputLabel,MenuItem, Button,Typography,Box} from '@mui/material';
const Formtable = () =>{

    return(
        <Box component="div" style={{marginTop : "150px"}}>
       <Typography variant="h4">Countries Form</Typography>
        <FormControl style={{width : "400px",marginTop  : '50px'}}>
        <FormControl>
       <TextField fullWidth label="Country" id="fullWidth" style={{padding : '-10px'}}  name = "country"/>
      </FormControl>
    
    <FormControl>
       <TextField fullWidth label="City" id="fullWidth"   name = "city" style={{margin : "10px 0px"}}/>
      </FormControl>
      <FormControl>
       <TextField fullWidth label="	Population" id="fullWidth" style={{padding : '-10px'}}   name = "population"/>
      </FormControl>
      <Button variant="contained" disableElevation  style={{marginTop : "14px"}} >
  Submit
   </Button>
    </FormControl>
    </Box>
    )
}

export{Formtable};