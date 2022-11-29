import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

export default function GraphTypeSelect(props) {

    return(
        <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
            <InputLabel id="graph-type-label">Select Graph</InputLabel>
            <Select xs={12}
                labelId="graph-type-label"
                onChange={e=>props.setGraphType(e.target.value)} /* This line handles the select and calls the setGraphType function in the parent */
                value={props.graphType}
                defaultValue={0}
            >
                <MenuItem value={0}>Min/Max Bar</MenuItem>
                <MenuItem value={1}>Scatterplot</MenuItem>
            </Select>
        </FormControl>
    );
}
