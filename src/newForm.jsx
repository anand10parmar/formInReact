import React, {Component} from 'react'
import Form from './child/ChildForm'

export default class newForm extends Component {
					constructor(props){
					super(props);

					this.state = {
					value: 'this is initial value'
					}					
					}

					handleInput = (event) => {
					this.setState({value: event.target.value});
					
					}
					

					handleSubmit = (event) => {
					alert("the name is:" +this.state.value);
					event.preventDefault();
					}

					render() {

					return(
					<div>
					<Form
						handleInput={this.handleInput}
						value={this.state.value}
						handleSubmit={this.handleSubmit}
					 />
					</div>
					)
					
					}

			}


