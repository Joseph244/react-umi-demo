import React from 'react';
interface IState{
  isGoing: boolean,
  numberOfGuests: number
}
type StateName = Pick<IState, keyof IState>
class Reservation extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name:StateName = target.name;
    // TODO: 这边不会写
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Reservation
