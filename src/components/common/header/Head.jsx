import React from 'react'
import {MenuItem,Select,ThemeProvider,createTheme
} from "@material-ui/core";
import { useNavigate } from "react-router-dom"
export const Head = () => {
  const navigate = useNavigate();
  const darkTheme =createTheme({
    palette : {
      primary: {
        main: "rgba(255, 255, 255, 0.3)",
      },
      type: "dark",
    },
  });
  return (
    <>
    <ThemeProvider >
    <section className="head">
        <div className="container flexSB paddingTB">
            <div className="logo">
                <img src='../BulletinWcrop.png' alt=''
                 onClick={() => navigate("/")}/>
            </div>
            <div className="ad">
              <Select 
              style={{
                width:100,
                height:40,
                marginRight:15,
              }}
              >
                <MenuItem value={"light"}>light</MenuItem>
                <MenuItem value={"dark"}>dark</MenuItem>
              </Select>
                {/*<h1>News Droid</h1>*/}
            </div>
        </div>
    </section>
    </ThemeProvider>
    </>
  )
}

export default Head