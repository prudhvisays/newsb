import React from 'react';
import GroupStyle from '../GroupStyle';
import AccordStyle from './AccordStyle';
import './Accord.css';

export default class TopList extends React.Component { //eslint-disable-line
constructor(props) {
  super(props);
  this.state = {
    accordionItems: [],
  }
  this.click = this.click.bind(this);
}
  // componentWillMount () {
  // 	let accordion = [];
  //
  // 	this.props.data.forEach((i) => {
  //     accordion.push({
  //       title: i.title,
  //       content: i.content,
  //       open: false
  //     });
  //   });
  //
	// 	this.setState({
  //     accordionItems: accordion,
  //   });
  // }

  // click (i) {
  // 	const newAccordion = this.state.accordionItems.slice();
  //   const index = newAccordion.indexOf(i)
  //
  //   newAccordion[index].open = !newAccordion[index].open;
  //   this.setState({accordionItems: newAccordion});
  // }

  click(id) {
    this.props.openAccordion(id);
  }


	render () {
  const { getMerchantReports } = this.props;
    const sections = this.props.data.map((i) => (
      <div key={i._id}>
        <div
          className="title ink-flex"
          onClick={this.click.bind(null, i._id)}
        >
         <span className="all-60 title-text">
           {i.name ? i.name : i._id}
         </span>
         <span className="all-40">
           <div className="ink-flex push-right">
             <span className="sub-title">Rs{i.sales && i.sales.toFixed(2)} |&nbsp;</span>
             <span className="sub-title">{i.distance/1000}Km</span>
           </div>
         </span>
       </div>
       <div className={i.open
         ? "content content-open"
         : "content"}
        >
          <div className={i.open
            ? "content-text content-text-open"
            : "content-text"}
          > {<div className="ink-flex push-right">
            <button onClick={() => getMerchantReports(i._id)}>Download Report</button>
          </div>}
          </div>
        </div>
      </div>
    ));

    return (
      <div className="accordion">
        {sections}
      </div>
    );
   }
}
