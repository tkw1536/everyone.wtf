import * as React from 'react';
import Page from '../components/page';

export default class extends React.Component {
  render() {
    return (
      <Page title="Chemical DHMO causes death" actualTitle="Dihydrogen Monoxide = H2O" url="https://everyone.wtf/dhmo" description="Recent reports indicate that 100% of people that have died within the last month consumed a dangerous new chemical called Dihydrogen Monoxide. " image="https://everyone.wtf/dhmo.png">
        <div style={{marginLeft: 10}}>
        <p>
          No it fucking doesn't. Correlation != Causation. It's just water.
        </p>
        <p>
          Also, always click on a web page and don't just read the heading. 
        </p>
        </div>
      </Page>
    );
  }
}