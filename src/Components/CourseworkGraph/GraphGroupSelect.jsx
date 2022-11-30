import { Component, useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function GraphGroupSelect(props) {
    const handleChange = (event) => {
        const {
          target: { value }
        } = event;
        //  On autofill we get stringified values
        console.log('sending students... ', value);      
        props.sendSelectedStudents(value);
      };
    
    const [names, setNames] = useState([]);
    useEffect(() => { // sets state with uniwue list of names from parent fetch
        let dupeArray = props.studentData.map((element) => {
            return element.name;
        });
        setNames([... new Set(dupeArray)]);
    }, []);

    return(
        <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
            <InputLabel id="graph-group-label">Select Student</InputLabel>
            <Select xs={12}
                labelId="graph-group-label"
                displayEmpty
                onChange={handleChange}
            >
                {names.map((student) => {
                    return(<MenuItem
                        value={student}
                        >
                        {student}
                        </MenuItem>
                    )
                })}
                <MenuItem value={0}>All Students</MenuItem>
            </Select>
        </FormControl>
    );
}