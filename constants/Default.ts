 type MESSAGETYPE = {
    updateInfo: string,
    addCartSuccess: string,
    UpdateCartSuccess: string,
    notLogin: string,
    loginSuccess: string,
    loginFail: string,
    logoutSuccess: string,
    functionFail: string,
    checkCartFail: string,
    addFavoritesSuccess: string,
    deleteFavoritesSuccess: string
 }
 const MESSAGE: MESSAGETYPE = {
    updateInfo: 'Cập nhật thông tin thành công',
    addCartSuccess: 'Sản phẩm đã được thêm vào giở hàng',
    UpdateCartSuccess: 'Cập nhật giỏ hàng thành công',
    notLogin: 'Bạn chưa đăng nhập',
    loginSuccess: 'Bạn đã đăng nhập thành công',
    loginFail: 'Bạn nhập sai email hoặc mật khẩu',
    logoutSuccess: 'Bạn đã đăng xuất',
    functionFail: 'Chức năng chưa hoàn thành',
    checkCartFail: 'Mã đơn hàng không trùng khớp',
    addFavoritesSuccess: 'Sản phẩm đã được thêm vào mục yêu thích',
    deleteFavoritesSuccess: 'Sản phẩm đã bị xóa khỏi mục yêu thích'
}
export default MESSAGE;