import React, { useState } from 'react';
import { Grid } from '@mui/material';

import GraphTypeSelect from "./GraphTypeSelect";
import GraphCourseworkSelect from "./GraphCourseworkSelect";
import GraphGroupSelect from "./GraphGroupSelect";

import Graphs from "./GraphDisplay";

// Test fetch function with the server running.
async function simpleGet() {
    let variable = await fetch("http://localhost:5000/assignments?aggregation=[ { $match: { class_id: { $eq: ObjectId('637441a3dbbc40b8267f8ce7') } } } ]");
    console.log('Here is the FETCH request', await variable.json());
}

export default function CourseworkGraph() {
    simpleGet(); // call the get function declared above.
    // Declaring Graph Type for GraphTypeSelect child
    const [graphType, setGraphType] = useState([0]); // useState exports the graphtype to an object for props to pass to child
    // Retrieving and updating Graph Type from Child->GraphTypeSelect
    const handleGraphType = (graphType) => {
        setGraphType(graphType) // The function we exported to props using
        }
    //Declaring and passing Assignment GET data to CourseworkSelect child
    let [assignmentsSelected, selectAssignments] = useState([
        {
            "_id": null, 
            "name": "all"
        }
    ]);
    // Update selected assignments
    const handleAssignments = (assignmentId) => {
        // Call filter function -> Updates filteredAssignments to pass to graph
        console.log('Received... ', assignmentId)
        
        // console.log('Filtering down master list: ', assignmentGetData);
        // filteredAssignments = assignmentGetData.filter(assign => assignmentId.includes(assign._id));
        // console.log('returned filtered list: ', filteredAssignments);
        updateFilter(filteredAssignments = assignmentGetData.filter(assign => assignmentId.includes(assign._id)));
    };
    


    // Fetch assignment data placeholder TODO: replace with a get request
    var assignmentGetData = [
        {"_id":"63685cb6bb2c349237c6fc06","name":"assignment 2","group_ids":[],"members":[],"__v":0},
        {"_id":"63685cb6bb2c349237c6fc07","name":"assignment 3","group_ids":[],"members":[],"__v":0},
        {"_id":"63685cb6bb2c349237c6fc08","name":"assignment 4","group_ids":[],"members":[],"__v":0},
        {"_id":"63685cb6bb2c349237c6fc09","name":"assignment 5","group_ids":[],"members":[],"__v":0},
        {"_id":"63685cb6bb2c349237c6fc0a","name":"assignment 6","group_ids":[],"members":[],"__v":0},
        {"_id":"63685cb6bb2c349237c6fc04","name":"assignment 0","group_ids":[],"members":[],"__v":0},
        {"_id":"63685cb6bb2c349237c6fc05","name":"assignment 1","group_ids":[],"members":[],"__v":0},
        ];
    
    var [filteredAssignments, updateFilter] = useState(() => {
        return assignmentGetData // Declares initial state of filteredAssignments = assignmentGetData
    });
    // function updateFilter(listSelectedAssignmentIds) {
    //     console.log('Filtering down master list: ', assignmentGetData);
    //     filteredAssignments = assignmentGetData.filter(assign => listSelectedAssignmentIds.includes(assign._id));
    //     console.log('returned filtered list: ', filteredAssignments);
    // };
    // Filter assignment GET data by the selected assignments returned Ids
    const filterAssignments = (listSelectedAssignmentIds) => {
        filteredAssignments = assignmentGetData.filter(({_id}) => listSelectedAssignmentIds.includes(_id));
        console.log('The newly filtered assignments are: ', filteredAssignments);
    };

    // Declare string lists of names and Ids for dropdown
    var assignmentNames = [];
    var assignmentIds = [];
    // Map json names key to string array
    assignmentNames = assignmentGetData.map((assignmentData) => {
        return assignmentData.name;
    });
    // Map json ids key to string array
    assignmentIds = assignmentGetData.map((assignmentData) => {
        return assignmentData._id;
    });

    // Fetch students data placeholder TODO: replace with get request
    var studentGetData = [
        {"_id":"636c746c51e97573ebaa8d06", "name":"user_0", "email":"user_0@humboldt.edu", "__v": 0},
        {"_id":"636c746d51e97573ebaa8d09", "name":"user_1", "email":"user_1@humboldt.edu", "__v": 0},
        {"_id":"636c746d51e97573ebaa8d0b", "name":"user_2", "email":"user_2@humboldt.edu", "__v": 0},
        {"_id":"636c746d51e97573ebaa8d0d", "name":"user_3", "email":"user_3@humboldt.edu", "__v": 0},
        {"_id":"636c75f700d5fb58f9c5f90f", "name":"user_4", "email":"user_4@humboldt.edu", "__v": 0}
    ]

    return (
        <div>
            <Grid container justify="space-around" justifyContent="center" pc={2} py={3} spacing={4}>
                <Grid item xs={10} sm={4} display="flex" justifyContent="center" alignItems="center">
                    <GraphTypeSelect setGraphType={handleGraphType}/>
                </Grid>
                <Grid item xs={10} sm={4} display="flex" justifyContent="center" alignItems="center">
                    <GraphCourseworkSelect assignmentName={assignmentNames} assignmentId={assignmentIds} sendSelectedAssignments={handleAssignments}/>

                </Grid>
                <Grid item xs={10} sm={4} display="flex" justifyContent="center" alignItems="center">
                    <GraphGroupSelect/>
                </Grid>
                <Grid py={6}>
                    {console.log('The parent object is passing', filteredAssignments)}
                    <Graphs graphType={graphType} assignmentGetData={filteredAssignments}/>
                </Grid>
            </Grid>
        </div>
    );
}

