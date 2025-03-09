import { NavLink } from "react-router-dom";

export const SideBar = ()=>{

    const getStyles=({isActive})=>{
        const styles='flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full';
        
        return isActive? `text-slate-50 bg-indigo-800 ${styles}` : 
        ` hover:bg-indigo-800  hover:text-slate-50 ${styles}`
    }
    return(
        <aside className="flex flex-col gap-5 border-r-2 border-gray-100 w-24 h-screen p-3 w-[150px]">
            <NavLink to='/' className={getStyles}> 
                <span class="material-symbols-outlined">
                 home
                </span>
                <span> Home</span>
            </NavLink>

            <NavLink to='/archive' className={getStyles}>
                <span class="material-symbols-outlined">
                 archive
                </span>
                <span> Archive </span>
            </NavLink>

            <NavLink to ='/important' className={getStyles}> 
                <span class="material-symbols-outlined">
                label_important
                </span>
                <span> Important </span>
            </NavLink>

            <NavLink to='/bin' className={getStyles}> 
                <span class="material-symbols-outlined">
                 delete
                </span>
                <span> Bin </span>
             </NavLink>
        </aside>    
    )
}