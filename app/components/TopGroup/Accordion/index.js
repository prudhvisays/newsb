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
  componentWillMount () {
  	let accordion = [];

  	this.props.data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false
      });
    });

		this.setState({
      accordionItems: accordion,
    });
  }

  click (i) {
  	const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i)

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({accordionItems: newAccordion});
  }

	render () {
    const sections = this.state.accordionItems.map((i) => (
      <div key={this.state.accordionItems.indexOf(i)}>
        <div
          className="title"
          onClick={this.click.bind(null, i)}
        >
         <span className="title-text">
           {i.title}
         </span>
       </div>
       <div className={i.open
         ? "content content-open"
         : "content"}
        >
          <div className={i.open
            ? "content-text content-text-open"
            : "content-text"}
          > {i.content}
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
