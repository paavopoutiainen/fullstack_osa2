import React from "react"

const Notification = ({message, errorMessage}) => {
    const stylesMessage = {
        color: "green",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding:10,
        marginBottom: 10
      }
      const stylesErrorMessage = {
        color: "red",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding:10,
        marginBottom: 10
      }  


    if(message === null && errorMessage === null){
        return null;
    } else if (errorMessage === null && message !== null){
        return <div style = {stylesMessage}>{message}</div> 
    } 
    return <div style = {stylesErrorMessage}>{errorMessage}</div>
    
}

export default Notification