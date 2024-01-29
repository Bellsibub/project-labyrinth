import { setState } from './game';
import { setRoom } from './room';

export const callAPI = (endpoint, message) => {
  return (dispatch) => {
    dispatch(setState('Loading'));
    fetch(`https://labyrinth.technigo.io/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...message })
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setRoom(data));
        dispatch(setState('Room'));
      });
  };
};

