import React from 'react';

import renderer from 'react-test-renderer';
import App from '@albanian-xrm/styled-switch/App';
import { IAppProps, IStyledSwitchProps } from '@albanian-xrm/styled-switch/App.types';
import { Notifier, SwitchValue } from '@albanian-xrm/styled-switch/notifier';

it('renders correctly', () => {
    const notifier = new Notifier<SwitchValue>();
    const disabledNotifier = new Notifier<boolean>();
    const stylesNotifier = new Notifier<IStyledSwitchProps>();
    const visibleNotifier = new Notifier<boolean>();
    const props: IAppProps = {
        notifier,
        disabledNotifier,
        stylesNotifier,
        visibleNotifier,
        initialVisible: true,
        initialStyles: {
            FalseHandleFill: null,
            FalseHandleImage: null,
            FalseTrackFill: null,
            TrueHandleFill: null,
            TrueHandleImage: null,
            TrueTrackFill: null
        },
        initialValue: true,
        onValueChanged: (value)=>{console.log(value)}
    };

    const tree = renderer
        .create(<App {...props} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
})