import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "./CardComponent"


class UnconnectedClinton extends Component {

  componentDidMount() {
    let reqestApiData = () => {
    this.props.dispatch({type:"REQUEST_CLINTON_DATA"});
    this.props.dispatch({type:"REQUEST_TRUMP_DATA"})
  }
  //real time updates
  setInterval(reqestApiData,60000)
}

  render = () => {
    let items = this.props.clintontweets;

    return (
      <div className="row"> 
      <h1 class="col s3 right"> Hilary Clinton's Recent Tweets</h1>
      <div><img src="https://pbs.twimg.com/profile_images/1051914952192057344/xwZDe7zt_400x400.jpg" className="circle responsive-img col s3 right" /></div>
      <div className="col s12 m4 l4">
        
      <div>
            {
              (items === undefined) ? null : (<div>{items.map((x, i) =>
                <CardComponent key={i} data={x} />
              )} </div>)
            }
              
          </div>
        </div>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return {
    clintontweets:st.clintontweets

  };
};

let Clinton = connect(mapStateToProps)(UnconnectedClinton);

export default Clinton;
