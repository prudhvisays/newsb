import React from 'react';
import ReTeamSelect from './ReTeamSelect';
import RePilotSelect from './RePilotSelect';
import ReDeliveryAddress from './ReDeliveryAddress';
import RePickupAddress from './RePickupAddress';
import LoadingSpinner from '../LoadingSpinner';
import ReOrderStyle from './ReOrderStyle';

class ReOrder extends React.Component {
    constructor(props) {
        super(props);
        this.cancelAction = this.cancelAction.bind(this);
    }

    cancelAction() {
        this.props.orderAction({reAssign: false,
            edit: false,
            delete: false,});
        this.props.reOrderClear();
    }
    render() {
        const {
            stateData,
            reOrder,
            stateTeamList,
            reSelectedPilots,
            orderOptions,
            orderAction,
            updateOrder,
            reOrderStatus,
            reOrderRequest,
        } = this.props;
        console.log(reOrderStatus);
        return (
        <div>
            { !reOrderRequest ? <ReOrderStyle style={{ padding: '0.5em 0.5em' }}>
                    <div className="main-card-height">
                        <div className="select-card card-bottom">
                            <div className="card-bottom">
                                <div className="sub-title">Select Team</div>
                                <ReTeamSelect
                                    stateData={stateData}
                                    reOrder={reOrder}
                                    stateTeamList={stateTeamList}
                                />
                            </div>
                            <div className="card-bottom">
                                <div className="sub-title">Select Pilot</div>
                                <RePilotSelect
                                    stateData={stateData}
                                    reOrder={reOrder}
                                    reSelectedPilots={reSelectedPilots}
                                />
                            </div>
                        </div>
                        { orderOptions.edit && (<div><div className="card-bottom">
                            <div className="card-title">Delivery Info</div>
                            <ReDeliveryAddress
                                stateData={stateData}
                                reOrder={reOrder}
                            />
                        </div>
                            <div className="card-bottom">
                                <div className="card-title">Pickup Info</div>
                                <RePickupAddress
                                    stateData={stateData}
                                    reOrder={reOrder}
                                />
                            </div></div>) }
                    </div>
                    <div className="ink-flex fixedButtons">
                        <button className="all-50 cancel" onClick={this.cancelAction}>Cancel</button>
                        <button className="all-50" onClick={updateOrder}>{orderOptions.edit ? 'Update' : 'Re-assign'}</button>
                    </div>
                </ReOrderStyle> : (<LoadingSpinner className="ink-flex push-center cs-loader" paddingOff color={reOrderStatus.statusColor}>
                    <div className="cs-loader-inner">
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <div className="cs-note">
                            <span>{reOrderStatus.statusText}</span></div>
                    </div>
                </LoadingSpinner>)}
        </div>

        )
    }
}

export default ReOrder;
