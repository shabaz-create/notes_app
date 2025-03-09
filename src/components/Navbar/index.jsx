import logo from "../../assets/notes_app_logo.png";


export const Navbar=()=> {
    return(
        <header className='flex px-5 py-1 gap-3 border-b-2 border-gray-120'>
            <div classNam='w-12 h-12'>
                <img className='w-12 h-12' src={logo} alt="notesAPP" />
            </div>
            <h1 className='text-indigo-800 text-4xl font-bold'>Notes</h1>
        </header>
    )
}