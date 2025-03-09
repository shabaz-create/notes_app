import logo from "../../assets/notes_app_logo.png";


export const Navbar=()=> {
    return(
        <header className='flex'>
            <div>
                <img src={logo} alt="notesAPP" />
            </div>
            <h1 className='text-orange-500'>notes</h1>
        </header>
    )
}