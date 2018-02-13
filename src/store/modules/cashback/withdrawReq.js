import gen from '../gen'
import auth from '../auth'
import axios from 'axios'

const state = {
  pay_accHolderName: '',
  pay_accNo : '',
  pay_ifscCode: ''
}

const getters = {

}

const mutations = {
  //
  sendWithdrawalReq(state, payload){
    //
    gen.actions.isEmpty(state, payload.accHolderName).then((res_1)=> {
      if (!res_1) {
        gen.actions.isEmpty(state, payload.accNo).then((res_2)=> {
          if (!res_2) {
            gen.actions.isEmpty(state, payload.ifscCode).then((res_3)=> {
              if (!res_3) {
                //
                if(parseInt(payload.amt) >= 250){
                  //
                  gen.state.btnLoader = true
                  //
                  console.log(payload)
                  //
                  axios.get('https://us-central1-kult-2.cloudfunctions.net/reqCashbackMoney', {
                    //
                    params: {
                      accHolderName: payload.accHolderName,
                      accNo: payload.accNo,
                      ifscCode: payload.ifscCode,
                      amt: payload.amt,
                      email : auth.state.user.email
                    }
                    //
                  }).then(function (response) {
                    console.log(response);
                    //
                    state.pay_accHolderName = ''
                    state.pay_accNo = ''
                    state.pay_ifscCode = ''
                    //
                    gen.state.btnLoader = false
                    //
                    alert('Request Sent !')
                    //
                    //
                    //
                  }).catch(function (error) {
                    console.log(error);
                  })
                  //
                }else{
                  alert('Amount in wallet must be greater than Rs 250 to initiate withdrawal !')
                }
                //
              }
            })
          }
        })
      }
    })
  },
  //
}

const actions = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
