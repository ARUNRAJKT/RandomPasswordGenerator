import React, { useState } from "react";
import { Button, Checkbox, Grid, Paper, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ContentCopy from '@mui/icons-material/ContentCopyTwoTone';
import './Style.css'

const generatePassword = (length, includeNumbers, includeAlphabets, includeSpecialChars) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = '';
    if (includeAlphabets) characters += charset;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
};
const PasswordGenerator = () => {

    const [password, setPassword] = useState('');
    const [passwordsHistory, setPasswordsHistory] = useState([]);
    const [isCopyClicked, setIsCopyClicked] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeAlphabets, setIncludeAlphabets] = useState(false);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

    const handleGeneratePassword = () => {
        if (!includeNumbers && !includeAlphabets && !includeSpecialChars) {
            toast.warning("Please select a checkbox");
            return;
        }
        const newPassword = generatePassword(12, includeNumbers, includeAlphabets, includeSpecialChars);
        const updatedHistory = [newPassword, ...passwordsHistory];
        const limitedHistory = updatedHistory.slice(0, 5);
        setPasswordsHistory(limitedHistory);
        setPassword(newPassword);
        const savedPasswordsString = localStorage.getItem("Passwords");
        const savedPasswords = savedPasswordsString ? JSON.parse(savedPasswordsString) : [];
        savedPasswords.push(newPassword);
        localStorage.setItem("Passwords", JSON.stringify(limitedHistory));
        localStorage.setItem("Passwords", JSON.stringify(savedPasswords));
    };

    const handleCopyToClipboard = () => {
        if (password === '') {
            toast.warning("Generate a Password First!")
        }
        else {
            navigator.clipboard.writeText(password);
            setIsCopyClicked(true);
            setTimeout(() => setIsCopyClicked(false), 1000);
        }
    };
    return (<center><br /><br />
        <ToastContainer />
        <Paper className="maindiv" style={{
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            borderRadius: "30px",
            background: "linear-gradient(180deg, rgba(150,14,140,1) 32%, rgba(19,4,87,1) 100%)",
            color: "white"
        }}><br />
            <Typography style={{ fontSize: "30px", fontFamily: "monospace", wordSpacing: "3px", letterSpacing: "2px" }} >
                Random Password Generator
            </Typography>

            <div id="subDiv" style={{ borderRadius: "30px", boxShadow: " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" }}><br />
                <Grid container className="grid">
                    <form></form>
                    <Grid item xs={4}>
                        <Checkbox style={{ color: "white" }} checked={includeNumbers}
                            onChange={() => setIncludeNumbers(!includeNumbers)}>
                        </Checkbox>
                        <label style={{ fontFamily: "monospace", fontSize: "17px", letterSpacing: "1px" }}>Number</label>
                    </Grid>
                    <Grid item xs={4}>
                        <Checkbox style={{ color: "white" }} checked={includeAlphabets}
                            onChange={() => setIncludeAlphabets(!includeAlphabets)}>
                        </Checkbox>
                        <label style={{ fontFamily: "monospace", fontSize: "17px", letterSpacing: "1px" }}>Alphabets</label>
                    </Grid>
                    <Grid item xs={4}>
                        <Checkbox style={{ color: "white" }} checked={includeSpecialChars}
                            onChange={() => setIncludeSpecialChars(!includeSpecialChars)} >
                        </Checkbox>
                        <label style={{ fontFamily: "monospace", fontSize: "17px", letterSpacing: "1px" }}>Special Character</label>
                    </Grid>
                </Grid>

                <Button onClick={handleGeneratePassword} variant="contained" color="success" style={{ margin: '2%', fontFamily: "monospace", fontSize: "17px", letterSpacing: "1px" }}>
                    Generate
                </Button>
            </div>
            <div style={{ fontFamily: "monospace", fontSize: "17px", letterSpacing: "1px" }}>
                Your Password is : <br /><br />
                <div className="subDiv" style={{ fontFamily: "cursive", fontSize: "30px" }} >
                    {password}
                    <Button endIcon={<ContentCopy />}
                        onClick={handleCopyToClipboard}
                        variant="contained"
                        color="success"
                        style={{
                            margin: '2%',
                            fontFamily: "monospace",
                            fontSize: "17px",
                            letterSpacing: "1px",
                            transition: "background-color 0.5s ease",
                            backgroundColor: isCopyClicked ? "#4caf50" : "#000000",
                        }}
                    >
                        {isCopyClicked ? "Copied!" : "Copy"}
                    </Button>
                </div>
            </div>
        </Paper><br />
        <Typography style={{ fontSize: "20px", fontFamily: "monospace", letterSpacing: "1px" }}>
            Last 5 Passwords:
        </Typography>
        {passwordsHistory.map((historyPassword, index) => (
            <Typography key={index}>{historyPassword}</Typography>
        ))}
    </center>
    )
};
export default PasswordGenerator;