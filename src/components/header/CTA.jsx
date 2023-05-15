import React from 'react'
import CV from '.././../assets/CV_RAYMOND.pdf'
const CTA = () => {
return (
<div className='cta'>
<a href={CV} download className='btn'>Download my CV</a>
<a href="#contact" className='btn btn-primary'>Let's Chart</a>
</div>
)
}
export default CTA //this line indicates that this component can be imported and used everywhere in our application.