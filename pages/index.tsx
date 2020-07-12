import * as React from 'react';
import Page from '../components/page';

export default class extends React.Component {
  render() {
    return (
      <Page title="Everyone Wat The Fuck" url="https://everyone.wtf" description="Everyone, Wat The Fuck?" image="https://everyone.wtf/index.jpg">
        <img src="./index.jpg" alt="Wat The Fuck?" title="Wat The Fuck?" style={{
          width: 586,
          height: 449,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }} />
      </Page>
    );
  }
}