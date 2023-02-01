import React from 'react'

export default function Conditional() {
    function MissedGoal()
    {
        return <h1>MISSED!</h1>

    }
    function MadeGoal()
{
    return <h1>Goal!</h1>;
}
function Goal(props)
{
    // const isGoal = props.isGoal;
    if (props.isGoal){
        return <MadeGoal/>;
    }
    else{
        return <MissedGoal/>;
    }
}
  return (
    <div>
        <Goal isGoal={true}/>
    </div>
  )
}
