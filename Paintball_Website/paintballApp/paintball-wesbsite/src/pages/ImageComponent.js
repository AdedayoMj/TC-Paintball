
import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';




export default class ImageComponent extends Component {

    render() 
    { const images = [
        {
          original: 'https://picsum.photos/id/1002/680/320/',
          thumbnail: 'https://picsum.photos/id/1002/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/680/320/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/680/320/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        
        {
            original: 'https://picsum.photos/id/28/680/320/',
            thumbnail: 'https://picsum.photos/id/28//250/150/',
        },  
        {
            original: 'https://picsum.photos/id/1023/680/320/',
            thumbnail: 'https://picsum.photos/id/1023/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1002/680/320/',
            thumbnail: 'https://picsum.photos/id/1002/250/150/',
        },
        {
            original: 'https://picsum.photos/id/229/680/320/',
            thumbnail: 'https://picsum.photos/id/229/250/150/',
        },
        {
            original: 'https://picsum.photos/id/249/680/320/',
            thumbnail: 'https://picsum.photos/id/249/250/150/',
        },
          
        {
              original: 'https://picsum.photos/id/254/680/320/',
              thumbnail: 'https://picsum.photos/id/254/250/150/',
        },  
        {
              original: 'https://picsum.photos/id/289/680/320/',
              thumbnail: 'https://picsum.photos/id/289/250/150/',
        },
            {
                original: 'https://picsum.photos/id/299/680/320/',
                thumbnail: 'https://picsum.photos/id/299/250/150/',
              },
              {
                original: 'https://picsum.photos/id/323/680/320/',
                thumbnail: 'https://picsum.photos/id/323/250/150/',
              },
         
    ];
   
      return (
          <div>
          <div class="w3-xxxlarge w3-container w3-lobster font-effect-brick-sign text-center home-text-colour"> GALLERY</div> 
        <ImageGallery items={images} />
        </div>
      );
    }
   
  }

 