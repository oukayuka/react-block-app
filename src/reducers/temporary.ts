import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from 'actions/temporary';

interface FlashMessage {
  message: string;
  isWarning?: boolean;
}

export interface TemporaryState {
  flashMessage: FlashMessage;
}

export const initialState: TemporaryState = {
  flashMessage: {
    message: '',
    isWarning: false,
  },
};

export const temporaryReducer = reducerWithInitialState(initialState)
  .case(actions.setFlashMessage, (state, payload) => ({
    ...state,
    flashMessage: {
      message: payload.message,
      isWarning: payload.isWarning || false,
    },
  }))
  .case(actions.clearFlashMessage, state => ({
    ...state,
    flashMessage: {
      ...state.flashMessage,
      message: '',
    },
  }));
