import { useSelector } from "react-redux"
function Count(){
    let {users}  = useSelector(state=>state.users)

    return(
        <div className="container text-center">
            <h1>{users.length}</h1>
        </div>
    )
}

export default Count