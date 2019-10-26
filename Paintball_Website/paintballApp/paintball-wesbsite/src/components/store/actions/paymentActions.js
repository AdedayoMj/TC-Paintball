
export const createPayment =(paintball)=>{
    return(dispatch, getState, {getFirebase, getFirestore} ) => {
        //make async call to database
        const firestore = getFirestore();
        const profile =getState().firebase.profile;
        const authorId =getState().firebase.auth.uid;

        firestore.collection('paintball').add({
            ...paintball,
        }).then(()=>{
            dispatch({type: 'CREATE_PAYMENT', paintball})
        }).catch((err)=>{
            dispatch({type: 'CREATE_PAYMENT_ERROR', err});
    })
    }
};




