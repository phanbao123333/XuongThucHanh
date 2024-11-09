export default function Header() {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-top-left">
              <ul className="header-top-list">
                <li>
                  <a href="#">
                    <i className="fa-regular fa-phone"></i> 0123 456 789 (miễn
                    phí)
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-light fa-location-dot"></i> Xem vị trí cửa
                    hàng
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-top-right">
              <ul className="header-top-list">
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Cửa hàng</a>
                </li>
                <li>
                  <a href="#">Chính sách</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="header-middle-left">
              <div className="header-logo">
                <a href="#">
                  <img
                    src="./assets/img/blank-image.png"
                    alt="Logo"
                    className="header-logo-img"
                  />
                </a>
              </div>
            </div>

            <div className="header-middle-center">
              <form action="" className="form-search">
                <span className="search-btn">
                  <i className="fa-light fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-search-input"
                  placeholder="Tìm kiếm món ăn..."
                />
                <button className="filter-btn">
                  <i className="fa-light fa-filter-list"></i>
                  <span>Lọc</span>
                </button>
              </form>
            </div>

            <div className="header-middle-right">
              <ul className="header-middle-right-list">
                <li className="header-middle-right-item">
                  <div className="cart-icon-menu">
                    <i className="fa-light fa-magnifying-glass"></i>
                  </div>
                </li>
                <li className="header-middle-right-item">
                  <div className="cart-icon-menu">
                    <i className="fa-light fa-circle-xmark"></i>
                  </div>
                </li>
                <li className="header-middle-right-item dropdown">
                  <i className="fa-light fa-user"></i>
                  <div className="auth-container">
                    <span className="text-dndk">Đăng nhập / Đăng ký</span>
                    <span className="text-tk">
                      Tài khoản{" "}
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </span>
                  </div>
                  <ul className="header-middle-right-menu">
                    <li>
                      <a href="#">
                        <i className="fa-light fa-right-to-bracket"></i> Đăng
                        nhập
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-light fa-user-plus"></i> Đăng ký
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="header-middle-right-item">
                  <div className="cart-icon-menu">
                    <i className="fa-light fa-basket-shopping"></i>
                    <span className="count-product-cart">0</span>
                  </div>
                  <span>Giỏ hàng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="header-bottom">
        <div className="container">
          <ul className="menu-list">
            <li className="menu-list-item">
              <a href="" className="menu-link">
                Trang chủ
              </a>
            </li>
            <li className="menu-list-item">
              <a href="javascript:;" className="menu-link">
                Món chay
              </a>
            </li>
            <li className="menu-list-item">
              <a href="javascript:;" className="menu-link">
                Món mặn
              </a>
            </li>
            <li className="menu-list-item">
              <a href="javascript:;" className="menu-link">
                Món lẩu
              </a>
            </li>
            <li className="menu-list-item">
              <a href="javascript:;" className="menu-link">
                Món ăn vặt
              </a>
            </li>
            <li className="menu-list-item">
              <a href="javascript:;" className="menu-link">
                Món tráng miệng
              </a>
            </li>
            <li className="menu-list-item">
              <a href="javascript:;" className="menu-link">
                Nước uống
              </a>
            </li>
            <li className="menu-list-item">
              <a href="javascript:;" className="menu-link">
                Món khác
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="advanced-search">
        <div className="container">
          <div className="advanced-search-category">
            <span>Phân loại </span>
            <select name="" id="advanced-search-category-select">
              <option>Tất cả</option>
              <option>Món chay</option>
              <option>Món mặn</option>
              <option>Món lẩu</option>
              <option>Món ăn vặt</option>
              <option>Món tráng miệng</option>
              <option>Nước uống</option>
            </select>
          </div>
          <div className="advanced-search-price">
            <span>Giá từ</span>
            <input type="number" placeholder="tối thiểu" id="min-price" />
            <span>đến</span>
            <input type="number" placeholder="tối đa" id="max-price" />
            <button id="advanced-search-price-btn">
              <i className="fa-light fa-magnifying-glass-dollar"></i>
            </button>
          </div>
          <div className="advanced-search-control">
            <button id="sort-ascending">
              <i className="fa-regular fa-arrow-up-short-wide"></i>
            </button>
            <button id="sort-descending">
              <i className="fa-regular fa-arrow-down-wide-short"></i>
            </button>
            <button id="reset-search">
              <i className="fa-light fa-arrow-rotate-right"></i>
            </button>
            <button>
              <i className="fa-light fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
