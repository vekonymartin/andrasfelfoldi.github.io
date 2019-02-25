import React, { Component } from 'react';
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

    style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Staatliches, cursive',
        fontSize: '4em',
        width: '100%',
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        if(!this.isMobileDevice()){
            window.addEventListener('resize', this.updateWindowDimensions);
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ height: window.innerHeight });
    }

    isMobileDevice = () => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    render() { 
        return ( 
            <div id={this.props.id} className='fadeInMoveUp'
                style={{...this.style, height: this.state.height}}>
                Welcome!
            </div>
        );
    }
}


 
export default Banner;