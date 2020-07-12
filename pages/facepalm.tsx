import * as React from 'react';
import Page from '../components/page';

export default class extends React.Component {
  render() {
    return (
      <Page title="Facepalm" url="https://everyone.wtf/facepalm" description="
      🤦" image="https://everyone.wtf/facepalm.jpg">
        <img src="./facepalm.jpg" alt="Facepalm" title="Facepalm" style={{
          width: 758,
          height: 425,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }} />
      </Page>
    );
  }
}