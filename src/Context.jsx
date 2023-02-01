import React,{useState,createContext,useContext} from 'react'

export default function Context() {


const UserContext= createContext();

    function Function1() {
        const [user,setUser] = useState("Rahul");
        return (
            <>
            <h1>Function1</h1>
            <UserContext.Provider value={{user}}>
                <Function2/>
            </UserContext.Provider>
           
            </>
        );
    }
    
    function Function2() {
        return(
            <>
            <h1>Function 2</h1>
            <Function3/></>
        );
    }
    
    function Function3() {
        return(
            <>
            <h1>Function 3</h1>
            <Function4 /></>
        );
    }
    
    function Function4() {
        return(
            <>
            <h1>Function 4</h1>
            <Function5 /></>
        );
    }
    
    function Function5(){
        const value = useContext(UserContext)
        return (
            <>
            <h1>Function 5,{'Hello' + value.user}</h1>
            <Function6/>
            </>
        );
    }
    
function Function6(){
    const value = useContext(UserContext)
    return(
        <>
        <h1>Function 6, {'Hello' +value.user}</h1></>
    )
}

  return (
    <div>Context

        <Function1/>
        
    </div>
  )
}
