import React, { Component } from 'react';
import Event from "./Event";
import axios from 'axios';
import { withAuth } from '../lib/AuthProvider';

class JoinedEvents extends Component {

    state = {
        events: [],
    }


    componentDidMount() {
        axios
            .get(`http://localhost:4000/user/userJoinedEvents`, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                this.setState({ events: res.data });
            });
    }


    render() {
        return (
            <div>
                {
                    this.state.events.map(event => {

                        return (
                            <div>
                                {event.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default withAuth(JoinedEvents);