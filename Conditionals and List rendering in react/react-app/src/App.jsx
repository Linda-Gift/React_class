import LoginAndLogoutButton from "./Conditional.jsx"
import Housebuying from "./Conditionals.jsx"
import MyLists from "./List.jsx"


function App() {
  

  return (
    <>
      <LoginAndLogoutButton 
        loggedIn = {true}
      />

      <LoginAndLogoutButton 
        loggedIn = {false}
      />

      <Housebuying 
        Age = {30}
      />

      <Housebuying 
        Age = {20}
      />

      <Housebuying 
        Age = {43}
      />

      <MyLists />
    </>
  )
}

export default App
