import React, { Component } from 'react'
//Component này sẽ đại diện cho component được load trên url
import { Outlet, NavLink } from 'react-router-dom'
//import thư viện kết nối với redux store
import { connect } from 'react-redux'

class HomeTemplate extends Component {

  tinhTongTien = () => {
    let tongTien = 0;
    for (let itemCart of this.props.cart) {
      tongTien += itemCart.quantity * itemCart.price
    }
    return tongTien;
  }
  render() {

    console.log('template props', this.props);
    return (
      <div>
        <header className='header p-3 bg-dark text-white vw-100'>
          <nav className='d-flex'>
            <div className='d-flex w-50'>
              <NavLink to='/' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Home</NavLink>
              <NavLink to='/cart' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Cart (Demo Props)</NavLink>
              <NavLink to='/cars' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Cars</NavLink>
              <NavLink to='/login' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Login</NavLink>
              <NavLink to='/react-form' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>ReactForm</NavLink>

              <NavLink to='/react-lifecycle' className={({ isActive }) => isActive ? 'text-dark mx-2 nav-link bg-white p-2' : 'text-white bg-dark mx-2 nav-link'} style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>React Life Cycle</NavLink>

              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink class="dropdown-item nav-link" to="/redux-demo1">Demo Tăng giảm SL</NavLink>
                  <NavLink class="dropdown-item nav-link" to="/redux-demo2">Demo Chọn xe</NavLink>
                  <NavLink class="dropdown-item nav-link" to="/redux-demo3">Demo Form Nhân Viên</NavLink>

                </div>
              </div>

              <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Api</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <div>
                    <NavLink class="dropdown-item nav-link" to="/api">Api State</NavLink>
                  </div>
                  <div>

                    <NavLink class="dropdown-item nav-link" to="/api-redux">Api Redux state</NavLink>
                  </div>


                </div>
              </div>
            </div>
            <div className='w-50 text-end'>
              <NavLink className={"text-white"} to="cart-page" style={{ textDecoration: 'none' }}>
                <i className='fa fa-cart-plus fs-3'></i> ({this.props.cart.length} - {this.tinhTongTien()} $)
              </NavLink>
            </div>


          </nav>
        </header>
        <main style={{ minHeight: '650px' }}>
          <Outlet></Outlet>
        </main>
        <footer className='bg-dark text-white p-3 text-center '>
          <h1>Footer</h1>
        </footer>
      </div>
    )
  }
}



const mapStateToProps = (state) => state.cartReducer;

export default connect(mapStateToProps)(HomeTemplate);