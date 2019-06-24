import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
      super();
      this.state = {name:"hitoshi_state"};
      this.name = "Hitoshi";
    }
    render() {
      console.log("Layout render start");
      let mumei_func = function(x,y){
        return x+y;
      }
      let sokuji_func = (function(x,y){
        return x+y;
      }(1,2));
      setTimeout( () => { this.setState({name: "matsumoto_state"}); },3000); 
      let components = [<Header />, <Footer />]; 
      let title = "Welcome Hitoshi!";
      return (
        <div>
          <Header name={"name_value"} title={title} check_prop={sokuji_func}/>
          <Header name={"name_value without another prop"} />
          <h1>Chage from hitoshi_state to matsumoto_state : {this.state.name}</h1>
          <h1>Hello world</h1>
          <h1>Hello world2</h1>
          <h1>1 + 10 = {1 + 10 }!</h1>
          <h1>3 = {this.get_result(3)}!</h1>
          <h1>mumei_function = {mumei_func(3,1)}!</h1>
          <h1>sokuji_function = {sokuji_func}!</h1>
          <h1>It's { ((num) => { return 1 + num; })(3) }!</h1>
          <Footer />
          <Footer />
          <Footer />
          {components}
        </div>
      );
    }
    get_result(num) {
      return num;
    }
  }