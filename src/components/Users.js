import {fetchUsers} from '../slices/userSlice';
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react';
function Users(){

    let { users, isPending, isError, errorMessage } = useSelector(state=>state.users)
    let dispatch = useDispatch()
    useEffect(()=>{
        let actionObj=fetchUsers('https://jsonplaceholder.typicode.com/posts')
        dispatch(actionObj)
    },[])
    return(
       
       
        <div className="container ">
        {/* If call is in pending */}
        {/* {isPending=true && <h1>Loading...</h1> } */}
        {/* If an error occurs */}
        {/* {isError=true && <h1>{errorMessage}</h1>} */}
        <table className="table">
                <tbody>
                    {
                        users.map(userObj=>(<tr key={userObj.id}>
                            <td>{userObj.userId}</td>
                            <td>{userObj.id}</td>
                            <td>{userObj.title}</td>
                        </tr>

                        ) )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default Users