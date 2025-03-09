import {Navbar} from "../../components/Navbar";
import { Fragment } from "react";
import { SideBar } from "../../components/SideBar";

export const Home =() => {
    return (
        <Fragment>
            <Navbar />
            <main>
                <SideBar />
            </main>
        </Fragment>
    )
}