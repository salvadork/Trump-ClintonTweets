import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "./CardComponent"


class UnconnectedTrump extends Component {

  componentDidMount() {
    let reqestApiData = () => {
    this.props.dispatch({type:"REQUEST_CLINTON_DATA"});
    this.props.dispatch({type:"REQUEST_TRUMP_DATA"})
  }
  
  // Real time updates
  setInterval(reqestApiData,60000)
}

  render = () => {
    let items = this.props.trumptweets;

    return (
      <div className="row"> 
      <h1 class="col s3 right"> Donald Trump's Recent Tweets</h1>
      <div><img src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" className="circle responsive-img col s3 right" /></div>
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
    trumptweets:st.trumptweets

  };
};

let Trump = connect(mapStateToProps)(UnconnectedTrump);

export default Trump;
