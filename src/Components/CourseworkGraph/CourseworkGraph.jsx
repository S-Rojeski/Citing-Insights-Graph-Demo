import React, { useEffect, useState } from 'react';
import { Grid, Skeleton } from '@mui/material';

import GraphTypeSelect from "./GraphTypeSelect";
import GraphCourseworkSelect from "./GraphCourseworkSelect";
import GraphGroupSelect from "./GraphGroupSelect";

import Graphs from "./GraphDisplay";

export default function CourseworkGraph() {
    const [loading, setLoading] = useState(false);
    // const targetClass = '637441a3dbbc40b8267f8ce7';
    const [assignmentGetData, setAssignments] = useState([]); // initate hook for assignment data
    useEffect(() => {   // Fetch API data after component mounts to DOM
      fetchAssignments(); // Call fetch assignments function
      fetchStudents();
      
    }, []); // Empty array indicates this only runs once
    
    const fetchAssignments = () => {
        setLoading(true);
        fetch("http://localhost:5000/assignments?aggregation=[ { $match: { class_id: { $eq: ObjectId('637441a3dbbc40b8267f8ce7') } } } ]")
            .then( ( response ) => response.json() )
            .then( ( data ) => {
                console.log('Fetch assignments returned', data);
                setAssignments(data);
                setLoading(false);
                handleAssignments(data.map((item) => {
                        return item._id
                    })    
                );
            })
    };

    const [studentData, setStudentData] = useState([]); // initiate hook for student name data

    const fetchStudents = () => {
        fetch("http://localhost:5000/paper?aggregation=[ { $match: { course: { $eq: ObjectId('637441a3dbbc40b8267f8ce7') } } } ]")
        .then( (response) => response.json())
        .then( (data) => {
            setStudentData(data);
        })
        .finally(() => {
            studentNaming();
            fetchCitations();
            console.log('Citations...', citationData);
        })
    };
    
    var studentNames = [];
    const studentNaming = () => {
        let dupeArray = studentData.map((element) => {
            return element.name;
        });
        studentNames = [...new Set(dupeArray)]; // Sets studentNames to be a list of unique strings
    };

    const [citationData, setCitationData] = useState([]);

    const fetchCitations = () => {
        if (studentNames.length > 0) {
            let firstFetchString = "http://localhost:5000/citations?aggregation=[ { $lookup: { from: 'paper' , localField: 'paper_id' , foreignField: '_id' , as: 'paperInfo' } } ,  { $match: { paperInfo: { $elemMatch: { name: \"";
            let secondFetchString = "\" } } } } ]";
            Promise.all(studentNames.map( async (element) => {
                return fetch(firstFetchString+element+secondFetchString).then( (response) => response.json()).then( (data) => { return Promise.resolve(data) });
            })).then( (data) => { setCitationData(data.reduce((result, input) => {
                input.forEach(elem => result.push(elem)); 
                return result;
            },[]))});
        };
    };

    // const fetchCitations = () => {
    //     if (studentNames.length > 0) {
    //         let firstFetchString = "http://localhost:5000/citations?aggregation=[ { $lookup: { from: 'paper' , localField: 'paper_id' , foreignField: '_id' , as: 'paperInfo' } } ,  { $match: { paperInfo: { $elemMatch: { name: \"";
    //         let secondFetchString = "\" } } } } ]";
    //         Promise.all(studentNames.map( async (element) => {
    //             return fetch(firstFetchString+element+secondFetchString).then( (response) => response.json()).then( (data) => { return Promise.resolve(data) });
    //         })).then( (data) => { 
    //             console.log('Citations fetched', data);
    //             setCitationData(data);
    //         });
    //     };
    // };

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
        
        updateFilter(filteredAssignments = assignmentGetData.filter(assign => assignmentId.includes(assign._id)));
    };
    
    var [filteredAssignments, updateFilter] = useState(() => {
        return assignmentGetData // Declares initial state of filteredAssignments = assignmentGetData
    });

    return (
        <div>
            <Grid container justify="space-around" justifyContent="center" pc={2} py={3} spacing={4}>
                <Grid item xs={10} sm={4} display="flex" justifyContent="center" alignItems="center">
                {loading ? <Skeleton variant='rectangular' width={240} height={40}/> : <GraphTypeSelect setGraphType={handleGraphType}/>}
                </Grid>
                <Grid item xs={10} sm={4} display="flex" justifyContent="center" alignItems="center">
                    {loading ? <Skeleton variant='rectangular' width={240} height={40}/> : <GraphCourseworkSelect assignmentGetData={assignmentGetData} sendSelectedAssignments={handleAssignments}/>}
                </Grid>
                <Grid item xs={10} sm={4} display="flex" justifyContent="center" alignItems="center">
                    {console.log('Passing students',studentData)}
                    {loading ? <Skeleton variant='rectangular' width={240} height={40}/> : <GraphGroupSelect studentData={studentData}/>}
                </Grid>
                <Grid py={6}>
                    {console.log('The parent object is passing', filteredAssignments)}
                    {loading ? <Skeleton variant='rectangular' width={480} height={600}/> : <Graphs graphType={graphType} assignmentGetData={filteredAssignments}/>}
                </Grid>
            </Grid>
        </div>
    );
}

