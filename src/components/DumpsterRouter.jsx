import React, { useState, useEffect } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import DumpsterTimeline2 from '../Pages/DumpsterTimeline2'
import DumpsterBoards from '../Pages/DumpsterBoards'
import DumpsterBoardsMusic from '../Pages/DumpsterBoardsMusic'
import DumpsterMessages from '../Pages/DumpsterMessages'
import DumpsterSaved from '../Pages/DumpsterSaved'
import DumpsterNotifications from '../Pages/DumpsterNotifications'
import DumpsterNavbar from './DumpsterNavbar'

const DumpsterRouter = props => {



    return(
        <BrowserRouter>
            <DumpsterNavbar />
        <Switch>
           

            <Route exact path = '/boards'>
                <DumpsterBoards username={props.username} nickName={props.nickName}  />
            </Route>
            <Route exact path = '/boards/music'>
                <DumpsterBoardsMusic username={props.username} nickName={props.nickName}  />
            </Route>
            <Route exact path = '/messages'>
                <DumpsterMessages username={props.username} nickName={props.nickName}  />
            </Route>
            <Route exact path = '/saved'>
                <DumpsterSaved username={props.username} nickName={props.nickName}  />
            </Route>
            <Route exact path = '/notifications'>
                <DumpsterNotifications username={props.username} nickName={props.nickName}  />
            </Route>
            <Route exact path = '/'>
                <DumpsterTimeline2 username={props.username} nickName={props.nickName} />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default DumpsterRouter