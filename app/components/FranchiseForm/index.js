import React from 'react';
import FrancStyle from './FrancStyle';
import FrancSelect from './FrancSelect';
import FrancMaps from './FrancMaps';
import './franc.css';

export default class FranchiseForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
    this.descChange = this.descChange.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
    this.submitFranchise = this.submitFranchise.bind(this);
  }
  nameChange(e) {
    this.emitChanges({ ...this.props.newFormState, name: e.target.value });
  }
  descChange(e) {
    this.emitChanges({ ...this.props.newFormState, description: e.target.value });
  }
  emitChanges(newFormState) {
    this.props.onFormChange(newFormState);
  }
  submitFranchise(e) {
    e.preventDefault();
    const { stateFranchiseGeoFence, newFormState, statefranchiseCord } = this.props;
    this.props.submitFranchiseData({ stateFranchiseGeoFence, newFormState, statefranchiseCord });
  }
  render() {
    const { stateReqGeoFence, stateFranchiseGeoFence } = this.props
    return (
      <FrancStyle className="formStyle">
        <form onSubmit={this.submitFranchise}>
          <div className="ink-flex vertical">
            <div className="Bottom-margin">
              <div className="fw-700">Name</div>
              <div className="area"><input type="text" placeholder="Name" onChange={this.nameChange}></input></div>
            </div>
            <div className="Bottom-margin">
              <div className="fw-700">Desc</div>
              <div className="area"><textarea type="text" placeholder="Description" onChange={this.descChange}></textarea></div>
            </div>
            <div className="Bottom-margin">
              <div className="fw-700">Teams</div>
              <div className="area"><FrancSelect /></div>
            </div>
            <div className="Bottom-margin">
              <div className="fw-700">Location</div>
              <div className="area"><FrancMaps postFrancCord={this.props.postFrancCord} stateData={this.props.stateData}/></div>
            </div>
            { stateReqGeoFence &&
                <div className="Bottom-margin">
                <div className="fw-700">Location</div>
                <div className="area">{stateFranchiseGeoFence.map((fence) => {
                        return (
                          <span>{fence}</span>
                        )
                })
                }
                </div>
              </div>
            }
            <div><button type="submit">SUBMIT</button></div>
          </div>
        </form>
      </FrancStyle>
    );
  }
}
