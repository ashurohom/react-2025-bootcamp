function Conditional(){
    const isLoggedIn = false

        // if(isLoggedIn){
        //     return <h1>WelCome User</h1>
        // }else{
        //     return <h1>Please Log In</h1>
        // }
    
        // return(
        // <div>
        //     <h1>Hello, React!</h1>
        //     {isLoggedIn && <p>User is loggedin</p>}
        // </div>
        // );

        return(
            <div>
                {isLoggedIn ? <p>User Loggedin</p> : <p>User Is LoggedOut</p>}
            </div>
        )
}
export default Conditional