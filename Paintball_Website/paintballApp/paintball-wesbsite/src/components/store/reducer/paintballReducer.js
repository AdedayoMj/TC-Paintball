const initState={
    payments: [
        {id:'1', email: 'mj@gmail.com',
        firstName: 'Dayo',
        lastName: 'Adegboye',
        mobileNumber:'+372 5804 6938',
        time: '10:30 AM',
        date: '25/12/2019',
        address:'Laanemere 70/2-116, Tallinn, Estonia',
        selectUser: '08',
        price: '3,000',
        total:'24,000'
    },
       
    ]
}

const paintballReducer =(state =initState, action) =>{
switch(action.type){
    case 'CREATE_PAYMENT':
        console.log('paintball order created',action.paintball );
        return state;
    case 'CREATE_PAYMENT_ERROR':
            console.log('paintball payment error', action.err);
    return state;
    default: 
    return state;
    }

}
export default paintballReducer


