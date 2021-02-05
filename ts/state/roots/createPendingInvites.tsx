// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import { Provider } from 'react-redux';

import { Store } from 'redux';

import {
  SmartPendingInvites,
  SmartPendingInvitesProps,
} from '../smart/PendingInvites';

export const createPendingInvites = (
  store: Store,
  props: SmartPendingInvitesProps
): React.ReactElement => (
  <Provider store={store}>
    <SmartPendingInvites {...props} />
  </Provider>
);
