import Link from "next/link"

import Nav from "./components/Nav"

const About = () => {


    return (
        <main>
            <Nav />

            <h3>About Page</h3>    
            <Link href='/en/test-page-welcome/'>Test Page</Link>

        </main>
    )
}


export default About