import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      countries: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e) {
    const { value } = e.target;
    this.setState({ value });

    if (value === '') {
      this.setState({ countries: [] });
      return;
    }

    const res = await axios.get('/countries', { params: { term: value } });
    this.setState({ countries: res.data });
  }

  render() {
    const { value, countries } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Country"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        {countries.length > 0 && (
          <ul>
            {countries.map((country) => (
              <li key={country}>{country}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Autocomplete;
// END
