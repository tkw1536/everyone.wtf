import * as React from 'react';
import Page from '../components/page';

export default class extends React.Component {
    render() {
        return (
            <Page title="Everyone Wat The Fuck" url="https://everyone.wtf/wat" description="Everyone, Wat The Fuck?" image="https://everyone.wtf/index.jpg">
                <iframe
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                    id="ytplayer"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/FNIeQDP37Nc?autoplay=1&loop=1&origin=https://everyone.wtf"
                    frameBorder="0"
                />
            </Page>
        );
    }
}