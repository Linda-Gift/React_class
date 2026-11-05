function LoginAndLogoutButton(props){

        if(props.loggedIn){
            return(
                <button>
                    Log Out
                </button>
            )
        }else{
            return(
                <button>Log in</button>
            )
        }

}

export default LoginAndLogoutButton