import React, { Component } from 'react'
import {store} from '../../redux/configStore'
import { connect} from 'react-redux'
class DemoTangGiamSoLuong extends Component {
    // state = {
    //     number : 1
    // }
    //tangGiamSoLuong = () => { this.setState({ number : number + 1})}
  render() {
    return (
      <div className='container'>
        {/* <h1>Number : {store.getState().number}</h1> */}
        <h1>Number : {this.props.number}</h1>
        <button className='btn btn-dark mx-2' onClick={() => {
            //action là dữ liệu sẽ gửi lên redux store
            const action = {
                type: 'TANG_GIAM_SOLUONG',
                payload: 1
            }
            //Dùng phương thức dispatch gửi dữ liệu lên redux
            store.dispatch(action);

        }}>+</button>
        <button className='btn btn-dark mx-2'>-</button>
      </div>
    )
  }
}
//Hàm lấy state từ redux về và biến this.props của component
const mapStateToProps = (state) => {
    return {
        number: state.number
    };
}
const ComponentWithRedux = connect(mapStateToProps)(DemoTangGiamSoLuong)
export default ComponentWithRedux




