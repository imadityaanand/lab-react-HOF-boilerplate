import React, { Component } from "react";

export default class HigherOrderFunction extends Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // LIST ALL DATA BASED ON USERTYPE
    renderUserTypes = () => {
        const data = this.state.userData;
        const filterRows = data.filter((item) => item.user_type === "Designer")
        const mapRows = filterRows.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // FILTER ALL DATA STARTING WITH THE LETTER J
    renderUserJ = () => {
        const data = this.state.userData;
        const filterRows = data.filter((item) => item.name[0] === "J")
        const mapRows = filterRows.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // FILTER DATA BASED ON AGE
    renderUserAge = () => {
        const data = this.state.userData;
        const filterRows = data.filter((item) => item.age > 28 && item.age <= 50)
        const mapRows = filterRows.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id} </span>
                    <span>Name : {item.name} </span>
                    <span>User Type: {item.user_type} </span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
    renderTotalExperience = () => {
        const data = this.state.userData;
        const totalExperience = data.reduce((acc, curr) => {
            if(curr.user_type === "Designer"){
                acc += curr.years
            }
            return acc
        }, 0);
        return totalExperience;
    };

    render() {
        return (
        // instead of a parent div tag, we can also use React.Fragment
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            <ul>{this.renderUserTypes()} </ul>
            <ul>{this.renderUserJ()} </ul>
            <ul>{this.renderUserAge()} </ul>
            <ul>{this.renderTotalExperience()} </ul>
            </div>
          </React.Fragment>
        )
    }
}
