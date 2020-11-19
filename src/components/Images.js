import React from 'react'
import Gallery from 'react-grid-gallery';
import { Container } from '@material-ui/core';
import image1 from '../images/1-min.jpg'
import image3 from '../images/3-min.jpg'
import image4 from '../images/4-min.jpg'
import image5 from '../images/5-min.jpg'
import image6 from '../images/6-min.jpg'
import image7 from '../images/7-min.jpg'
import image8 from '../images/8-min.jpg'
import image9 from '../images/9-min.jpg'
import image10 from '../images/10-min.jpg'
import image11 from '../images/11-min.jpg'
import image12 from '../images/12-min.jpg'
import image13 from '../images/13-min.jpg'
import image14 from '../images/14-min.jpg'
import image15 from '../images/15-min.jpg'
import image16 from '../images/16-min.jpg'
import image17 from '../images/17-min.jpg'


const IMAGES =
[
    {
        src:image1,
        thumbnail: image1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Logo design for company(KediBay)"
    },
{

        src: image3,
        thumbnail: image3,
        thumbnailWidth: 320,
        thumbnailHeight: 174
}
,{
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 320,
    thumbnailHeight: 174
},
{
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
},
{
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Boats (Jeshu John - designerspics.com)"
},

{
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,{
    src: image8,
    thumbnail: image8,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,{
    src: image9,
    thumbnail: image9,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,{
    src: image10,
    thumbnail: image10,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,{
    src: image11,
    thumbnail: image11,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,{
    src: image12,
    thumbnail: image12,
    thumbnailWidth: 320,
    thumbnailHeight: 174
},{
    src: image13,
    thumbnail: image13,
    thumbnailWidth: 320,
    thumbnailHeight: 174
},

{
    src: image14,
    thumbnail: image14,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,
{
    src: image15,
    thumbnail: image15,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,{
    src: image16,
    thumbnail: image16,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
,{
    src: image17,
    thumbnail: image17,
    thumbnailWidth: 320,
    thumbnailHeight: 174
}
]

function Images() {
    return (
        <Container >
             <h1 className="headings">Gallery</h1>
             <Container>
              <Gallery images={IMAGES}/>
              </Container>
        </Container>
    )
}

export default Images
