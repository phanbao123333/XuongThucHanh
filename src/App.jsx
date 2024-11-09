import "./App.css";
import "./js/data";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <div className="container" id="trangchu">
          <div className="home-slider">
            {/* <img src="./assets/img/banner-1.png" alt="" /> 
       <img src="./assets/img/banner-2.png" alt="">
       <img src="./assets/img/banner-3.png" alt="">  */}
            <img src="./assets/img/banner-4.png" alt="" />
            {/* <img src="./assets/img/banner-5.png" alt=""> */}
          </div>
          <div className="home-service" id="home-service">
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <i className="fa-light fa-person-carry-box"></i>
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">GIAO HÀNG NHANH</h4>
                <p className="home-service-item-content-desc">
                  Cho tất cả đơn hàng
                </p>
              </div>
            </div>
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <i className="fa-light fa-shield-heart"></i>
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">
                  SẢN PHẨM AN TOÀN
                </h4>
                <p className="home-service-item-content-desc">
                  Cam kết chất lượng
                </p>
              </div>
            </div>
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <i className="fa-light fa-headset"></i>
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">HỖ TRỢ 24/7</h4>
                <p className="home-service-item-content-desc">
                  Tất cả ngày trong tuần
                </p>
              </div>
            </div>
            <div className="home-service-item">
              <div className="home-service-item-icon">
                <i className="fa-light fa-circle-dollar"></i>
              </div>
              <div className="home-service-item-content">
                <h4 className="home-service-item-content-h">HOÀN LẠI TIỀN</h4>
                <p className="home-service-item-content-desc">
                  Nếu không hài lòng
                </p>
              </div>
            </div>
          </div>
          <div className="home-title-block" id="home-title">
            <h2 className="home-title">Khám phá thực đơn của chúng tôi</h2>
          </div>
          <div className="home-products" id="home-products">
            <div className="col-product">
              <article className="card-product">
                <div className="card-header">
                  <a href="#" className="card-image-link">
                    <img
                      className="card-image"
                      src="./assets/img/products/nam-dui-ga-chay-toi.jpeg"
                    />
                  </a>
                </div>
                <div className="food-info">
                  <div className="card-content">
                    <div className="card-title">
                      <a href="#" className="card-title-link">
                        Nấm đùi gà xào cháy tỏi{" "}
                      </a>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="product-price">
                      <span className="current-price">200.000&nbsp;₫</span>
                    </div>
                    <div className="product-buy">
                      <button className="card-button order-item">
                        <i className="fa-regular fa-cart-shopping-fast"></i> Đặt
                        món
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="page-nav">
            <ul className="page-nav-list">
              <li className="page-nav-item active">
                <a href="javascript:;">1</a>
              </li>
              <li className="page-nav-item">
                <a href="javascript:;">2</a>
              </li>
              <li className="page-nav-item">
                <a href="javascript:;">3</a>
              </li>
              <li className="page-nav-item">
                <a href="javascript:;">4</a>
              </li>
              <li className="page-nav-item">
                <a href="javascript:;">5</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container" id="account-user">
          <div className="main-account">
            <div className="main-account-header">
              <h3>Thông tin tài khoản của bạn</h3>
              <p>Quản lý thông tin để bảo mật tài khoản</p>
            </div>
            <div className="main-account-body">
              <div className="main-account-body-col">
                <form action="" className="info-user">
                  <div className="form-group">
                    <label className="form-label">Họ và tên</label>
                    <input
                      className="form-control"
                      type="text"
                      name="infoname"
                      id="infoname"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Số điện thoại</label>
                    <input
                      className="form-control"
                      type="text"
                      name="infophone"
                      id="infophone"
                      disabled="true"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="infoemail"
                      id="infoemail"
                      placeholder="Thêm địa chỉ email của bạn"
                    />
                    <span className="inforemail-error form-message"></span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Địa chỉ</label>
                    <input
                      className="form-control"
                      type="text"
                      name="infoaddress"
                      id="infoaddress"
                      placeholder="Thêm địa chỉ giao hàng của bạn"
                    />
                  </div>
                </form>
              </div>
              <div className="main-account-body-col">
                <form action="" className="change-password">
                  <div className="form-group">
                    <label className="form-label w60">Mật khẩu hiện tại</label>
                    <input
                      className="form-control"
                      type="password"
                      name=""
                      id="password-cur-info"
                      placeholder="Nhập mật khẩu hiện tại"
                    />
                    <span className="password-cur-info-error form-message"></span>
                  </div>
                  <div className="form-group">
                    <label className="form-label w60">Mật khẩu mới</label>
                    <input
                      className="form-control"
                      type="password"
                      name=""
                      id="password-after-info"
                      placeholder="Nhập mật khẩu mới"
                    />
                    <span className="password-after-info-error form-message"></span>
                  </div>
                  <div className="form-group">
                    <label className="form-label w60">
                      Xác nhận mật khẩu mới
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name=""
                      id="password-comfirm-info"
                      placeholder="Nhập lại mật khẩu mới"
                    />
                    <span className="password-after-comfirm-error form-message"></span>
                  </div>
                </form>
              </div>
              <div className="main-account-body-row">
                <div>
                  <button id="save-info-user">
                    <i className="fa-regular fa-floppy-disk"></i> Lưu thay đổi
                  </button>
                </div>
                <div>
                  <button id="save-password">
                    <i className="fa-regular fa-key"></i> Đổi mật khẩu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="order-history">
          <div className="main-account">
            <div className="main-account-header">
              <h3>Quản lý đơn hàng của bạn</h3>
              <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt.</p>
            </div>
            <div className="main-account-body">
              <div className="order-history-section"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
