import { Component } from "react";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function GraphGroupSelect() {
   

        return(
            <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
                <InputLabel id="graph-group-label">Select Student</InputLabel>
                <Select xs={12}
                    labelId="graph-group-label"
                >
                    <MenuItem disabled value={0}>All Students</MenuItem>
                    <MenuItem value={1}>Student1</MenuItem>
                    <MenuItem value={2}>Student2</MenuItem>
                    <MenuItem value={3}>Student3</MenuItem>
                </Select>
            </FormControl>
        );
}