'use client'

import {React, useState} from 'react'
import "cropperjs/dist/cropper.css";
import styled from 'styled-components';



function page() {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);

  const changeImage = (e) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result);
      }
    }
  }
  const handleRemoveImage = () => {
    setImageSelectedPrevious(null);
  }

  return (
    <div>
      <StyleDragArea>
        <br/>
        <div className='image-upload-wrap'>
          <input
            className='file-upload-input'
            type='file'
            accept='image/*'
            onChange={(e) => {changeImage(e)}}
          />
          {!ImageSelectedPrevious && (
            <div className='text-information'>
              <h4>Arrastra y suelta el ícono o presiona click</h4>
            </div>
          )}
          {ImageSelectedPrevious && (
            <img
              src={ImageSelectedPrevious}
              alt=''
              height='100%'
              width='100%'
            />
          )}
        </div>
      </StyleDragArea>
       
    </div>
  )
}

export default page;

const StyleDragArea = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }

  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }

  .image-upload-wrap {
    position: relative;
    height: 90px;
    width: 180px;
    border: 4px solid #d0d7de;
    margin-left: 10px;
    margin-right: 10px;
  }

  .image-upload-wrap:hover {
    background-color: transparent;
    border: 4px dashed #d0d7de;
  }
  .text-information {
    margin-top: 15px;
    text-align: center;
  }

`;