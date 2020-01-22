import React, { Component } from 'react';

export default class EditQuiz extends Component {
  render() {
    return (
      <div className='container'>
        <div className='notification'>
          <div className='field'>
            <label className='label'>Question</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='e.g What does ISRO stands for?'
                required
                value=''
                onChange={() => {}}
              />
            </div>
          </div>

          <div className='field'>
            <label className='label'>Option 1</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                required
                value=''
                onChange={() => {}}
                placeholder='e.g. Indian Space Reserch Organization'
              />
            </div>
          </div>

          <div className='field'>
            <label className='label'>Option 2</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                required
                value=''
                onChange={() => {}}
                placeholder='e.g. Indian Space Reserch Organization'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Option 3</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                required
                value=''
                onChange={() => {}}
                placeholder='e.g. Indian Space Reserch Organization'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Option 4</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                required
                value=''
                onChange={() => {}}
                placeholder='e.g. Indian Space Reserch Organization'
              />
            </div>
          </div>
          <div className='field'>
            <label className='label'>Answer</label>
            <div className='control'>
              <input
                className='input'
                type='number'
                required
                // value=''
                limit='4'
                onChange={() => {}}
                placeholder='e.g. option 1'
              />
            </div>
          </div>

          <div className='control'>
            <button className='button is-primary'>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
