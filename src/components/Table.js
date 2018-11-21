import React from 'react';

const TableComponent = props => {
    console.log(props);
   return(
       
       <div style={{ margin: "40px 0 40px 0" }} >
       <table cellPadding="8" align="center" border="1" margin-bottom="20px">
           <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Date of Birth</th>
                <th>Country</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>{ props.firstName }</td>
                <td>{ props.lastName }</td>
                <td>{ props.phoneNumber }</td>
                <td>{ props.dob }</td>
                <td>{ props.country }</td>
            </tr>
           </tbody>
       </table>
       </div>
   )
}
export default TableComponent;