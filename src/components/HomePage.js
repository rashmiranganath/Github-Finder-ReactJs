import React , {useState }from 'react'
import GithubFinder from "./githubFinder"
import SideBar from './SideBar'
import { Grid, Box } from '@material-ui/core'

function HomePage() {
    const [searchBtnClicked,setBtn] = useState(false)
    console.log(searchBtnClicked)
    return (
        <div style={{ display: "flex" }} >
            <div>
                <SideBar />
            </div>
            <div style={{
                alignSelf: "center", margin: "auto"
            }}>
                <GithubFinder />
            </div>
        </div>

    )
}

export default HomePage
