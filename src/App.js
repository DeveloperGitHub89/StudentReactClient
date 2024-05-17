import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BASE_ROUTE, REGISTRATION_ROUTE, STUDENTS_LIST_ROUTE, STUDENT_EDIT_ROUTE, STUDENT_HOME_ROUTE } from "./constants/AppRoute";
import { Home } from "./components/ui/Home";
import { StudentRegistrationForm } from "./components/ui/StudentRegistrationForm";
import { StudentsList } from "./components/ui/StudentsList";
import { StudentEditForm } from "./components/ui/StudentEditForm";
import { LoginForm } from "./components/ui/LoginForm";
import { PrivateRoute } from "./components/library/PrivateRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path={BASE_ROUTE} element={<LoginForm />} />
        <Route element={<PrivateRoute />}>
          <Route path={STUDENT_HOME_ROUTE} element={<Home />} />
          <Route path={REGISTRATION_ROUTE} element={<StudentRegistrationForm />} />
          <Route path={STUDENTS_LIST_ROUTE} element={<StudentsList />} />
          <Route path={STUDENT_EDIT_ROUTE} element={<StudentEditForm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
