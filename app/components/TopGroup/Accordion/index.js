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
    const sections = this.props.data.map((i) => (
      <div key={i._id}>
        <div
          className="title ink-flex"
          onClick={this.click.bind(null, i._id)}
        >
         <span className="all-70 title-text">
           {i.name}
         </span>
         <span className="all-30">
           <div className="ink-flex push-right">
             <span className="sub-title">Sales</span>
             <span>{i.sales}</span>
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
          > {'There are no merchants present for this team'}
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
