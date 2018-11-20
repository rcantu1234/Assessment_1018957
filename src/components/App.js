import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (<Router >
                <div >
                    <Link to="/"> Login </Link>
                    
                    <Route exact path = "/"  component = {Login}  /> 
                    <Route path = "/table" component = {TableComponent}  /> 
                </div>
                </Router>);
    }
}

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.setEmpState = this.setEmpState.bind(this);
        this.state = { data: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            dob: '',
            country: ''
          }   
        }
    }

    setEmpState(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.data[field] = value;
        return this.setState({ data: this.state.data });
    }

    handleLogin(e) {
        if((this.refs.firstName.value == '' || this.refs.lastName.value == '' || this.refs.phoneNumber.value == ''
            || this.refs.dob.value == '' || this.refs.country.value == '')) {
                { alert( 'Please enter details!!!') };
            }
            else {
                { alert('First Name : ' + this.state.data.firstName 
                + '\nLast Name : ' + this.state.data.lastName
                + '\nPhone Number : ' + this.state.data.phoneNumber
                + '\nDate of Birth : ' + this.state.data.dob
                + '\nCountry : ' + this.state.data.country) }
            }
    }

    render() {
        return(<div>
                <div style={{borderWidth:"1px", backgroundColor:"#aaaaaa", borderStyle:'solid', width: "550px", align: "center", marginLeft: "400px" }}>
                        <form onSubmit={this.handleLogin} >
                        <br/><h2 style={{ margin: "20px" }} >Login</h2>
    
                        <div className="form-group" style={{ margin: "20px" }}>
                            <label htmlFor="text">First Name :</label>
                            <input type="text" style={{ width: "500px" }} className="form-control" id="firstName" 
                            placeholder="First Name" name="firstName" ref="firstName" 
                            onChange={ this.setEmpState }/>
                        </div>
                        <div className="form-group" style={{ margin: "20px" }}>
                            <label htmlFor="text">Last Name :</label>
                            <input type="text" style={{ width: "500px" }} className="form-control" id="lastName" 
                            placeholder="Last Name" name="lastName" ref="lastName" 
                            onChange={ this.setEmpState } />
                        </div>

                        <div className="form-group" style={{ margin: "20px" }}>
                            <label htmlFor="text">Last Name :</label>
                            <input type="text" style={{ width: "500px" }} className="form-control" id="phoneNumber" 
                            placeholder="Phone Number" name="phoneNumber" ref="phoneNumber" 
                            onChange={ this.setEmpState } />
                        </div>

                        <div className="form-group" style={{ margin: "20px" }}>
                            <label htmlFor="text">Date of Birth :</label>
                            <input type="date" style={{ width: "500px" }} className="form-control" id="dob" 
                            placeholder="Date of Birth" name="dob" ref="dob" 
                            onChange={ this.setEmpState } />
                        </div>

                        <div className="form-group" style={{ margin: "20px" }}>
                        <label htmlFor="text">Select your country :  </label>
                            <select id="country" name="country" ref="country" id="country" onChange={ this.setEmpState }>
                            <option value=""></option>
                            <option value="USA">USA</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Canada">Canada</option>
                            </select>
                        </div>
                        
                        <Button style={{ margin: "20px" }} type="submit" bsStyle="primary">Submit</Button>    
                        </form>
                </div>
                 {/* <div>
                     <TableComponent firstName = { this.state.data.firstName } />
                 </div> */}
            </div>);
               
    }
}

 class TableComponent extends React.Component {
    render() {
        return(
            <table>
                <tr style={{ borderStyle: "1px" }}>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Date of Birth</th>
                </tr>
                <tr>
                    <td>{ this.props.firstName }</td>
                    <td>{ this.props.lastName }</td>
                    <td>{ this.props.phoneNumber }</td>
                    <td>{ this.props.dob }</td>
                </tr>
            </table>
        )
    }
}
export default App;