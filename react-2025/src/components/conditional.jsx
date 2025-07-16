function Conditional(){
    const isLoggedIn = true

        if(isLoggedIn){
            return <h1>WelCome User</h1>
        }else{
            return <h1>Please Log In</h1>
        }
    
}
export default Conditional