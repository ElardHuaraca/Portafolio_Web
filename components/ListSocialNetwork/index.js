import facebook from '../../public/facebook.png';
import linkedin from '../../public/linkedin.png';
import cv from '../../public/cv.png';

let socialsNetworks = [
    {
        id: 1,
        name: 'facebook',
        url: 'https://www.facebook.com/elard.huaracaquispe/',
        image: facebook,
        alt: 'facebook',
        style: 0
    },
    {
        id: 2,
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/elardhuaraca/',
        image: linkedin,
        alt: 'linkedin',
        style: 1
    },
    {
        id: 3,
        name: 'CV',
        url: '/cv.pdf',
        image: cv,
        alt: 'cv',
        style: 1
    }
]

export default socialsNetworks;