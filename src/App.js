import React from "react";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {latitude:null };

    window.navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({latitude:position.coords.latitude})
    },
       (error) => console.log(error)
   )}
   render(){
     return(
      <div>
      Latitude:{this.state.latitude}
      </div>)
  }
}
export default App;
