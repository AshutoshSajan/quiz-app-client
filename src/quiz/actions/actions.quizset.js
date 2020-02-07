import {
  action
} from '../../utils/helper';

export function createQuizset(url, token, data, history) {
  return dispatch => {
    dispatch(action('QUIZSET_IN_PROCESS', true));

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(action('CREATE_QUIZSET', data.quizset));
          history.push('/');
        }
        if (!data.success) {
          dispatch(action('QUIZSET_ERROR', data.message));
        }
      })
      .catch(err => {
        dispatch(
          action(
            'QUIZSET_ERROR',
            'something went wrong. sorry for the trouble.'
          )
        );
        console.log(err, 'create quizset catch err...');
      });
  };
}

export function getQuizsets(url, token) {
  return dispatch => {
    dispatch(action('QUIZSET_IN_PROCESS', true));

    fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(action('GET_QUIZSETS', data.quizsets));
        }
        if (!data.success) {
          dispatch(action('QUIZSET_ERROR', data.message));
        }
      })
      .catch(err => {
        dispatch(
          action(
            'QUIZSET_ERROR',
            'something went wrong. sorry for the trouble.'
          )
        );
        console.log(err, 'get quizset catch err...');
      });
  };
}

export function updateQuizset(url, token, data, history) {
  return dispatch => {
    dispatch(action('QUIZSET_IN_PROCESS', true));

    fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify({
          name: data
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(action('UPDATE_QIZSET', data.quizset));
          history.push('/');
        }
        if (!data.success) {
          dispatch(action('QUIZSET_ERROR', data.message));
        }
      })
      .catch(err => {
        dispatch(
          action(
            'QUIZSET_ERROR',
            'something went wrong. sorry for the trouble.'
          )
        );
        console.log(err, 'update quizset catch err...');
      });
  };
}

export function handleDeleteQuizset(url, token, id) {
  return dispatch => {
    dispatch(action('QUIZSET_IN_PROCESS', true));

    fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch(action('DELETE_QUIZSET', id));
        }
        if (!data.success) {
          dispatch(action('QUIZSET_ERROR', data.message));
        }
      })
      .catch(err => {
        dispatch(
          action(
            'QUIZSET_ERROR',
            'something went wrong. sorry for the trouble.'
          )
        );
        console.log(err, 'delete quizset catch err...');
      });
  };
}