import React from 'react';
import Select from 'react-select';
import './Navbar.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select1 from '@mui/material/Select';
const Navbar = ({userLang, setUserLang, userTheme,
                setUserTheme, fontSize, setFontSize}) => {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]
 
  
    return (
        <div className="navbar">
            <h1>Online Code Compiler</h1>
           
        <div>
      <FormControl color='primary' >
        <InputLabel id="demo-simple-select-label" color='primary' sx={{
    color: '#ee4c49' }} >Language</InputLabel>
        <Select1 className="demo-simple-select-label dropdown"
          labelId="demo-simple-select"
          id="dropmodeselect"
          value={userLang}
          onChange={(e) => setUserLang(e.target.value)}
          sx={{color: '#ee4c49' }} 
          label="Mode"MenuProps={{
            
            PaperProps: {
              sx: {
                bgcolor: '#474747',
                '& .MuiMenuItem-root': {
                  padding: 2,
                },
              },
            },
          }}
        >
          <MenuItem value={"c"} sx={{color: '#ee4c49' }} >C</MenuItem>
          <MenuItem value={"cpp"} sx={{color: '#ee4c49' }} >C++</MenuItem>
          <MenuItem value={"python"} sx={{color: '#ee4c49' }} >Python</MenuItem>
          <MenuItem value={"java"} sx={{color: '#ee4c49' }} >Java</MenuItem>
        </Select1>
      </FormControl>
    </div>  

    <div>
      <FormControl color='primary' >
        <InputLabel id="demo-simple-select-label" color='primary' sx={{
    color: '#ee4c49' }} >Mode</InputLabel>
        <Select1 className="demo-simple-select-label dropdown"
          labelId="demo-simple-select"
          id="dropmodeselect"
          value={userTheme}
          onChange={(e) => setUserTheme(e.target.value)}
          sx={{color: '#ee4c49' }} 
          label="Mode"MenuProps={{
            
            PaperProps: {
              sx: {
                bgcolor: '#474747',
                '& .MuiMenuItem-root': {
                  padding: 2,
                },
              },
            },
          }}
        >
          <MenuItem value={"vs-dark"} sx={{color: '#ee4c49' }} >Dark</MenuItem>
          <MenuItem value={"light"} sx={{color: '#ee4c49' }} >Light</MenuItem>
        </Select1>
      </FormControl>
    </div>      
  

            <label>Font Size</label>
            <input type="range"  min="18" max="30" 
                   value={fontSize} step="2"
                   onChange={(e) => { setFontSize(e.target.value)}}/>
        </div>
    )
}
 
export default Navbar

/* <div>
          <Select options={languages} value={userLang}
                    onChange={(e) => setUserLang(e.value)}
                    placeholder={userLang} />
            <Select options={themes} value={userTheme}
                    onChange={(e) => setUserTheme(e.value)}
                    placeholder={userTheme} /> </div> */