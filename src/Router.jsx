import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import Classes from './Classes';
import Arrow from './Arrow';
import Test from './Test'
import Variable from './Variable'
import Array from './Array'
import Destructuring from './Destructuring';
import Spreadoperator from './Spreadoperator';
import Ternary from './Ternary';
import Import from './Import';
import Props from './Props';
import Event from './Event';
import Conditional from './Conditional';
import List from './List';
import Forms from './Forms';
import Insert from './local storage/Insert';
import View from './local storage/View'
import Edit from './local storage/Edit';
import Propsdrill from './Propsdrill';
import Context from './Context';
import SingleView from './local storage/SingleView';

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path= "/" element={<Home/>}/>
            <Route exact path= "/usestate" element={<Usestate/>}/>
            <Route exact path= "/useeffect" element={<Useeffect/>}/>
            <Route exact path="/propsdrill" element={<Propsdrill/>}/>
            <Route exact path= "/classes" element={<Classes/>}/>
            <Route exact path= "/arrow" element={<Arrow/>}/>
            <Route exact path= "/test" element={<Test/>}/>
            <Route exact path= "/variable" element={<Variable/>}/>
            <Route exact path= "/array" element={<Array/>}/>
            <Route exact path= "/destructuring" element={<Destructuring/>}/>
            <Route exact path= "/spreadoperator" element={<Spreadoperator/>}/>
            <Route exact path= "/ternary" element={<Ternary/>}/>
            <Route exact path= "/import" element={<Import/>}/>
            <Route exact path= "/props" element={<Props/>}/>
            <Route exact path= "/event" element={<Event/>}/>
            <Route exact path= "/conditional" element={<Conditional/>}/>
            <Route exact path= "/list" element={<List/>}/>
            <Route exact path= "/forms" element={<Forms/>}/>
            <Route exact path= "/insert" element={<Insert/>}/>
            <Route exact path= "/view" element={<View/>}/>
            <Route exact path= "/edit/:id" element={<Edit/>}/>

           <Route exact path="/single-view/:id" element={<SingleView />}/>
            <Route exact path= "/context" element={<Context/>}/>



            </Routes>
            </BrowserRouter>
    </div>
  )
}
