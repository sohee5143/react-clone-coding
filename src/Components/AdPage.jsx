import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true, // 초기에 광고를 보여줄지 여부를 설정
    };
  }

  // 광고 표시 여부를 토글하는 메서드
  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd,
    }));
  };

  render() {
    return (
      <div>
  
        <Ad showAd={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? '광고 안보기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;