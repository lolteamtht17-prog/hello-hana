# Trang Web Tặng Bạn ❤️

Một trang web đơn giản và đẹp mắt để tặng bạn lần đầu gặp.

## Tính năng

✨ **Trang chào mừng đẹp mắt** với hiệu ứng animation mượt mà
🎉 **Click vào hộp quà** để mở gallery ảnh với hiệu ứng confetti rơi
🖼️ **Gallery ảnh** với hiệu ứng bounce/fade khi xuất hiện
🔍 **Xem ảnh fullscreen** với modal và điều hướng bằng phím mũi tên

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt web
2. Trang web sẽ tự động hiển thị với các hiệu ứng đẹp mắt
3. **Click vào hộp quà 💝** ở giữa để mở gallery ảnh
4. Click vào bất kỳ ảnh nào để xem fullscreen
5. Sử dụng nút ← → hoặc phím mũi tên để điều hướng giữa các ảnh

## Tùy chỉnh

### Thay đổi nội dung
Chỉnh sửa file `index.html`:
- Thay đổi lời chào
- Thay đổi thông điệp
- Thay đổi tên người gửi

### Thêm ảnh của bạn
Mở file `script.js` và tìm mảng `images` ở đầu file:
```javascript
const images = [
    'đường-dẫn-ảnh-1.jpg',
    'đường-dẫn-ảnh-2.jpg',
    'đường-dẫn-ảnh-3.jpg',
    // Thêm ảnh của bạn vào đây
];
```

Bạn có thể:
- Thêm ảnh vào thư mục và dùng đường dẫn tương đối: `'images/photo1.jpg'`
- Hoặc dùng URL ảnh online

### Thay đổi màu sắc và style
Chỉnh sửa file `styles.scss` và compile lại thành CSS, hoặc chỉnh sửa trực tiếp file `styles.css`.

## Compile SCSS (nếu cần)

Nếu bạn muốn compile SCSS sang CSS:

```bash
# Sử dụng sass
sass styles.scss styles.css

# Hoặc sử dụng npm với sass
npm install -g sass
sass styles.scss styles.css
```

Hiện tại file `styles.css` đã được compile sẵn, bạn có thể sử dụng ngay!

