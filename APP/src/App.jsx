import './App.css'
import SignIn from "./components/SignIn";
import auth from "./services/auth.service";
import Button from "@mui/material/Button";

function App() {

    console.log(auth.getCurrentUser())

    return (
        <div className="App">

            {auth.getCurrentUser() ?? <SignIn></SignIn>}

{/*
            <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={auth.logout()}
                sx={{ mt: 3, mb: 2 }}
            >
                Log out
            </Button>
*/}

        </div>
    )
}

export default App
