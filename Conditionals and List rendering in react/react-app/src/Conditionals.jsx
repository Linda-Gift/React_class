function Housebuying(props){
    if(props.Age >= 30){
        return(
            <h2>You can buy the House</h2>
        )
    }else{
        return(
            <h2>You Can pay in Mortgages</h2>
        )
    }
}

export default Housebuying