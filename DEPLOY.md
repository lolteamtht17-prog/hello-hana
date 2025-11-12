# Hướng dẫn Deploy lên Vercel

## Cách 1: Sử dụng Vercel CLI (Nhanh nhất - 5 phút)

### Bước 1: Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### Bước 2: Đăng nhập Vercel
```bash
vercel login
```
Sẽ mở trình duyệt để đăng nhập hoặc tạo tài khoản Vercel (miễn phí).

### Bước 3: Deploy
Trong thư mục project, chạy:
```bash
vercel
```

Vercel sẽ hỏi một số câu hỏi:
- **Set up and deploy?** → Nhấn `Y` (Yes)
- **Which scope?** → Chọn tài khoản của bạn
- **Link to existing project?** → Nhấn `N` (No) - tạo project mới
- **Project name?** → Nhấn Enter để dùng tên mặc định hoặc đặt tên mới
- **Directory?** → Nhấn Enter (dùng thư mục hiện tại)
- **Override settings?** → Nhấn `N` (No)

### Bước 4: Xong!
Vercel sẽ tự động deploy và cung cấp URL cho bạn. Ví dụ: `https://your-project.vercel.app`

---

## Cách 2: Deploy qua GitHub (Khuyến nghị - có version control)

### Bước 1: Tạo GitHub Repository
1. Tạo repository mới trên GitHub
2. Push code lên GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### Bước 2: Kết nối với Vercel
1. Vào https://vercel.com
2. Đăng nhập bằng GitHub
3. Click "Add New Project"
4. Import repository vừa tạo
5. Click "Deploy"

### Bước 3: Xong!
Vercel sẽ tự động deploy và cung cấp URL.

---

## Cách 3: Drag & Drop (Đơn giản nhất nhưng không có version control)

1. Vào https://vercel.com và đăng nhập
2. Click "Add New Project"
3. Chọn "Browse" hoặc kéo thả toàn bộ thư mục project vào
4. Click "Deploy"

---

## Lưu ý

- **Miễn phí**: Vercel có gói miễn phí rất tốt
- **HTTPS tự động**: Tất cả site đều có HTTPS
- **Custom domain**: Có thể thêm domain riêng nếu muốn
- **Auto deploy**: Nếu dùng GitHub, mỗi lần push code sẽ tự động deploy lại

## Troubleshooting

Nếu gặp lỗi, kiểm tra:
- Đảm bảo file `index.html` ở root folder
- Đảm bảo các file CSS, JS được link đúng đường dẫn
- Kiểm tra console trong trình duyệt để xem lỗi

