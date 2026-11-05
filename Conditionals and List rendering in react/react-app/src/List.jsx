function MyLists(props){
    const countries = ["Nigeria", "Cambodia","Venezuela", "Jamaica"]

    return(
        <ul>
          {
            countries.map((country, index)=> (
                <li key = {index}>
                    {country}
                </li>
            ))
          }  
        </ul>
    )
}

export default MyLists