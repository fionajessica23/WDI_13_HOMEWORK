import React from 'react'

export default class PasswordChecker extends React.Component {

  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      score: 0,
      content: '',
      strength: ''
    }
  }

  onInputChange(event) {
    this.setState({ content: event.target.value })
    console.log(this.state.content);
  }


  render() {

    var { score, content, strength } = this.state

    score = 0
    if (content.length >= 8) {
      score ++
    }

    var regex = new Array(); 
    regex.push("[A-Z]");
    regex.push("[a-z]");
    regex.push("[0-9]");
    regex.push("[$@$!%*#?&]");

    for (var regexType = 0; regexType < regex.length; regexType++) {
      if (new RegExp(regex[regexType]).test(content)) {
        score ++
      }
    }

    switch (score) {
      case 0:
        strength = "";
        break;
      case 1:
        strength = "Weak";
        break;
      case 2:
        strength = "Moderate";
        break;
      case 3:
        strength = "Good";
        break;
      case 4:
        strength = "Strong";
        break;
      case 5:
        strength = "Very Strong";
        break;
    }

    return (
      <div>
        <input
          // type="password"
          placeholder="type in your password"
          onChange={this.onInputChange}/>
          <p>{strength}</p>
      </div>
    )
  }
}
