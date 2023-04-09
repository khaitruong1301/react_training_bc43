import React, { Component } from 'react'

export default class Item extends Component {

    

    render() {
        //lấy từ propsName của component cha truyền vào
        let {phone,xemChiTiet} = this.props;

        return (
            <div className='card'>
                <img src={phone.hinhAnh} alt='...' height={'100%'} />
                <div className='card-body'>
                    <h3>{phone.tenSP}</h3>
                    <p>{phone.giaBan.toLocaleString()} VND</p>
                    <button className='btn btn-success' onClick={() => {
                        xemChiTiet(phone)
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
