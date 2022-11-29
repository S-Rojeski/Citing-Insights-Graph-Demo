import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function GraphCourseworkSelect(props) {
    const handleChange = (event) => {
        const {
          target: { value }
        } = event;
        //  On autofill we get stringified values
        console.log('sending... ', value);      
        props.sendSelectedAssignments(value);
      };
    

    return(
        <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
            <InputLabel id="graph-coursework-label">Select Coursework</InputLabel>
            <Select xs={12}
                labelId="graph-coursework-label"
                multiple
                defaultValue={[]}
                onChange={handleChange}
            >
                {props.assignmentName.map((assignment, x) => {
                    return(<MenuItem
                        value={props.assignmentId[x]}
                    >
                        {assignment}
                    </MenuItem>
                )
                })
                    
                }
                <MenuItem value={props.assignmentId}>All assignments</MenuItem>
            </Select>
        </FormControl>
    );
}