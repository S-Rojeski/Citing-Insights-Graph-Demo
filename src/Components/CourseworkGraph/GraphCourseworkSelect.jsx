import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function GraphCourseworkSelect(props) {
    // const [names, setNames] = useState(props.assignmentName);
    // useEffect(() => {
    //   if (props.assignmentName) {
    //     setNames(props.assignmentName)
    //   }
    // }, [props.assignmentName]);
    
    // const [ids, setIds] = useState(props.assignmentId);
    // useEffect(() => {
    //   if (props.assignmentId) {
    //     setIds(props.assignmentId)
    //   }
    // }, [props.assignmentId]);


    const handleChange = (event) => {
        const {
          target: { value }
        } = event;
        //  On autofill we get stringified values
        console.log('sending... ', value);      
        props.sendSelectedAssignments(value);
      };
    
    // Declare string lists of names and Ids for dropdown
    var assignmentNames = [];
    var assignmentIds = [];
    // Map json names key to string array
    assignmentNames = props.assignmentGetData.map((assignmentData) => {
        return assignmentData.name;
    });
    // Map json ids key to string array
    assignmentIds = props.assignmentGetData.map((assignmentData) => {
        return assignmentData._id;
    });



    return(
        <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
            <InputLabel id="graph-coursework-label">Select Coursework</InputLabel>
            <Select xs={12}
              labelId="graph-coursework-label"
              multiple
              defaultValue={[]}
              onChange={handleChange}
            >
              {assignmentNames.map((assignment, x) => {
                  return(<MenuItem
                      value={assignmentIds[x]}
                  >
                      {assignment}
                  </MenuItem>
              )
              })}
              <MenuItem value={assignmentIds}>All assignments</MenuItem>
            </Select>
        </FormControl>
    );
}