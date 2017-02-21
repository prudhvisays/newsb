import React from 'react';
import TaskAddress from '../TaskAddress';
import DeliveryAddress from '../DeliveryAddress';
import TaskStyle from '../TaskStyle';

export default class Tabs extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.taskTabs = this.taskTabs.bind(this);
  }
  componentDidMount() {
    document.getElementById('default-task').click();
  }
  taskTabs(event, TaskName) {
    const evt = event;
    let i;
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName('task-content');
    for (i = 0; i < tabcontent.length; i += 1) {
      tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName('task-links');
    for (i = 0; i < tablinks.length; i += 1) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(TaskName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
  render() {
    const { pickupCord, deliveryCord, pickupChange, stateAddTask, deliveryChange } = this.props;
    return (
      <div className="block-background" style={{ height: '40vh' }}>
        <TaskStyle className="ink-flex task-tab" style={{ margin: 0 }}>
          <li className="all-50"><a className="task-links" id="default-task" onClick={(event) => { this.taskTabs(event, 'add-pickup'); }}>Pickup Address</a></li>
          <li className="all-50"><a className="task-links" onClick={(event) => { this.taskTabs(event, 'add-delivery'); }}>Delivery Address</a></li>
        </TaskStyle>
        <div id="add-pickup" className="task-content" style={{ fontSize: '1rem' }}>
          <TaskAddress pickupCord={pickupCord} deliveryCord={deliveryCord} pickupChange={pickupChange} stateAddTask={stateAddTask} />
        </div>
        <div id="add-delivery" className="task-content">
          <DeliveryAddress deliveryCord={deliveryCord} stateAddTask={stateAddTask} deliveryChange={deliveryChange} />
        </div>
      </div>
    );
  }
}
