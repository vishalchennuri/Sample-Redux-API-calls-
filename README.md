<!-- COMMANDS TO RUN THIS CODE  -->

1) npm install
2)npm start
3)json-server --watch db.json --port 4000

<!--Redux for fetching and updating in the Api  -->

-> first created a store 
-> Then export the store as store 
-> Import the store and the Provider in index.html 
-> Then Wrap App.js in provider like this 
   {<Provider store = {store}>
    <App />
    </Provider>}
-> Then create the slices 

<!-- USER SLICE for get values -->   
    ->Using createAsyncThunk and axios fetch the data of the url 
    -> create a slice function  and add initial state Reducers and extraReducers and create it 
    -> Then export the slice as UserSlice.reducer
<!-- ACCESSING THE USER SLICE  -->
    -> import useSelector and useDispatch hook in the Users.js 
    -> Dispatch the userApi using 
    {
        let { users, isPending, isError, errorMessage } = useSelector(state=>state.users)
    let dispatch = useDispatch()
    useEffect(()=>{
        let actionObj=fetchUsers('https://jsonplaceholder.typicode.com/posts')
        dispatch(actionObj)
    },[])
    }


<!-- PRODUCTS SLICE FOR POSTING THE DATA TO THE API  -->
    ->Here we did calls using get in the products slice..just like the user api and dispatched from the PRoducts.js
    ->to post the data to the api axios.post is used in  the function of onSubmit
