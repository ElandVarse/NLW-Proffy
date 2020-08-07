import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import TeacherForm from './pages/TeacherForm/TeacherForm';
import TeacherList from './pages/TeacherList/TeacherList';

export default () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" exact component={TeacherList} />
            <Route path="/give-classes" exact component={TeacherForm} />
        </BrowserRouter>
    )
}
