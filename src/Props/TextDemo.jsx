import React, { Component } from 'react'

export default class TextDemo extends Component {

    
  render() {
    //this.props: là thuộc tính của react class component dùng để nhận giá trị từ component cha truyền vào (thẻ sử dụng thẻ này)
    //props không lại bằng giá trị khác (hằng số)
    let {name,price,img} = this.props;
    // this.props.name = 'abc';
    return (
      <div className='card'>
        <img src={img} alt='...' />
        <div className='card-body'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
      </div>
    )
  }
}
