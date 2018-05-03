import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('TEMPORARY');

export const setFlashMessage = actionCreator<{
  message: string;
  isWarning?: boolean;
}>('SET_FLASH_MESSAGE');

export const clearFlashMessage = actionCreator<{}>('REMOVE_FLASH_MESSAGE');
