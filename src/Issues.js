import React, { Component } from 'react'

export default class Issues extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             issues: [],
             error: "",
        }
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/IvanMarkelov/l7/issues")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              issues: result,
            });
            // Проверяем, что получили
            console.log(this.state.issues);
          },
        )
    }
    
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.issues.map((issue) => <li>Обращение {issue.number}: {issue.name}</li>)}
                </ul>
            </div>
        )
    }
}
