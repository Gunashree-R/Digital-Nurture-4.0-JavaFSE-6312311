import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }

  handleChange(e) {
    this.setState({ rupees: e.target.value });
  }

  handleConvert(e) {
    e.preventDefault(); // Synthetic event
    const conversionRate = 0.011; // Example rate: 1 INR = 0.011 EUR
    const euroValue = (this.state.rupees * conversionRate).toFixed(2);
    this.setState({ euro: euroValue });
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleConvert}>
          <label>
            INR: 
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <button type="submit" style={{ marginLeft: '10px' }}>Convert</button>
        </form>
        {this.state.euro && (
          <p>EUR: €{this.state.euro}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
