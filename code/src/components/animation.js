import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/loader.json'


const LoaderAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return <Lottie
        options={defaultOptions}
        height={400}
        width={400}
    />
}


export default LoaderAnimation
