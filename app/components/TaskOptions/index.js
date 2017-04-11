import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Dropdown from '../Dropdown';
import { EnhanceDropdown as enhancer } from '../EnhanceDropdown';

const EnchancedDropdown = enhancer(Dropdown);

class TaskOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: 0,
            data: [
                {
                    title: 'Re-assign',
                    icon: 'fa-refresh',
                },
                {
                    title: 'Edit',
                    icon: 'fa-pencil-square-o',
                },
                {
                    title: 'Delete',
                    icon: 'fa-exclamation-triangle',
                },
            ],
            isSecondOpen: true
        };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(option,item) {
        const { orderOptions, stateOrderInfo, stateData } = this.props;
        this.setState({ optionSelected: option});
        if(item === 'Re-assign') {
            this.props.orderAction({...orderOptions, reAssign: true});
            this.props.reOrder({
                ...stateData,
                team: stateOrderInfo.team ? stateOrderInfo.team._id : '',
                pilot: stateOrderInfo.pilot ? stateOrderInfo.pilot._id : '',
                status: stateOrderInfo.status ? stateOrderInfo.status : '',
            });
        }else if(item === 'Edit') {
            this.props.orderAction({...orderOptions, [item.toLowerCase()]: true});
            this.props.reOrder({...stateData,
                ...stateOrderInfo,
                team: stateOrderInfo.team ? stateOrderInfo.team._id : '',
                pilot: stateOrderInfo.pilot ? stateOrderInfo.pilot._id : '',
            });
        } else if(item === 'Delete'){
            this.props.orderAction({...orderOptions, [item.toLowerCase()]: true});
            this.props.deleteOrder();
        }
        }
    render() {
        const { orderOptions, orderAction } = this.props
        return (
                            <EnchancedDropdown
                                className="task-options"
                                optionSelected={this.state.optionSelected}
                                onSelect={this.onSelect}
                                data={this.state.data}
                                icon={'fa-ellipsis-v'}
                                orderAction={orderAction}
                                orderOptions={orderOptions}
                            />
        );
    }
}

export default TaskOptions;
