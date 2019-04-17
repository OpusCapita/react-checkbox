import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Store, StateDecorator } from '@sambego/storybook-state';

// Application
import './scss/app.component.scss';
import Checkbox from '../src/checkbox.component';
/* eslint-disable no-alert */
/* eslint-disable no-console */

const store = new Store({ checked: false });


storiesOf('@opuscapita/react-checkbox', module)
  .addDecorator(StateDecorator(store))
  .add('React Checkbox', () => (state) => {
    const onChange = () => {
      store.set({ checked: !state.checked });
    };

    const knobs = {
      label: text('Label', 'Default label'),
      disabled: boolean('Disabled', false),
      checked: state.checked,
      onChange,
    };

    return (
      <div className="checkbox-container">
        <Checkbox{...knobs} />
      </div>
    );
  });
