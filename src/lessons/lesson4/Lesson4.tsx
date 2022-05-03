import React from 'react'
import './lesson_4';
import {log} from 'util';

type handlePromiseType = {
    promise: null | Promise<any>
    resolve: () => void
    reject: (paramName: any) => void
    onSuccess: (paramName: any) => void
    onError: (paramName: any) => void
}


const Lesson4 = () => {

    let handlePromise: handlePromiseType
    //     {
    //     promise: null,
    //     resolve: null,
    //     reject: null,
    //     onSuccess: (paramName: any) =>
    //         console.log(`Promise is resolved with data: ${paramName}`),
    //     onError: (paramName: any) =>
    //         console.log(`Promise is rejected with error: ${paramName}`),
    // }

    const creatHandler = () => {
        handlePromise.promise = new Promise((res, rej) => {
            handlePromise.resolve = res
            handlePromise.reject = rej
            handlePromise.resolve()
        })
    }

    const resolveHandler = () => {
        handlePromise.promise?.then((paramName)=>{
            console.log(`Promise is resolved with data: ${paramName}`)
        })
    }
   const rejectHandler = () => {
       handlePromise.promise?.catch((paramName)=>{
           console.log(`Promise is rejected with error: ${paramName}`)
       })
    }

    return (
        <div>
            <button id="btn-create-promise" onClick={creatHandler}>Create Promise</button>
            <button id="btn-resolve-promise" onClick={resolveHandler}>Resolve Promise</button>
            <button id="btn-reject-promise" onClick={rejectHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;