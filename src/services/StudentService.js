import axios from "axios";
import { GET_STUDENT_API_ROUTE, REMOVE_STUDENT_API_ROUTE, SAVE_STUDENT_API_ROUTE, UPDATE_STUDENT_API_ROUTE } from "../constants/ApiConstants";
import { getToken } from "./AdminService";

export function saveStudent(studentData){
    return axios.post(SAVE_STUDENT_API_ROUTE,studentData,{headers:{'Authorization':`Bearer ${getToken()}`}})
}

export function fetchAllStudents(){
    return axios.get(GET_STUDENT_API_ROUTE,{headers:{'Authorization':`Bearer ${getToken()}`}});
}

export function removeStudent(studentId){
    return axios.delete(`${REMOVE_STUDENT_API_ROUTE}/${studentId}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
}

export function fetchStudentById(studentId){
    return axios.get(`${GET_STUDENT_API_ROUTE}/${studentId}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
}

export function updateStudent(studentData){
    return axios.put(`${UPDATE_STUDENT_API_ROUTE}/${studentData.id}`, studentData,{headers:{'Authorization':`Bearer ${getToken()}`}});
} 