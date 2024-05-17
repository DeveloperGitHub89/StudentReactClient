import { Container } from "react-bootstrap";
import { Header } from "../library/Header";
import { NavigationBar } from "./NavigationBar";

export function Home() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Header title="Welcome to student management application" description="Here you can perform CRUD operations on a student." />
            </Container>
        </>

    )
}