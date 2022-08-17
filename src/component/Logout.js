export default function Logout(){

    const out = ()=>{
       sessionStorage.removeItem("user")
       window.location.reload()

    }
    return(
        <>
            <button onClick={out} className="text-slate400 px-2 underline hover:text-second">keluar</button>
        </>
    )
}