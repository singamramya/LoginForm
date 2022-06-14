import React, { Component } from 'react'

 class Ref extends Component {
     constructor(props) {
       super(props)
     
         this.inputef = React.createRef()  
          
       
     }

    componentDidMount(){
        this.inputef.current.focus()
       
    }
      focusHandler=()=>{
        alert(this.inputef.current.value)
         const obj={
           name:this.inputef.current.value
         }
         console.log(obj)
      }


  render() {
    return (
      <div>
        <input type="text" ref={this.inputef} />
         <button onClick={this.focusHandler}>Click</button> 
      </div>
    )
  }
}

export default Ref
