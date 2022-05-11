
1. xây dựng database bán sách (sơ lược 1)
- book: id, tên, mô tả, tác giả, thể loại, số lượng
- thể loại: id, tên thể loại

(1 book thuộc 1 hoặc nhiều thể loại)
(1 thể loại có 1 hoặc nhiều book)

- khách hàng: id, tên, sdt, địa chỉ, email
- giỏ hàng: id khách hàng, ngày đặt hàng

(1 khách hàng có 1 hoặc nhiều giỏ hàng)
(1 giỏ hàng có 1 hoặc nhiều book)
ok!

2. Init express
- npm init -y
- install: 
    + express | -D @types/express :  để dùng express
    + -D @types/node : để dùng nodejs typescript
    + -D nodemon: auto reload
    + -D prettier: auto format code
    + npx tsc --init: tạo file tsconfig.json
    + dotenv: để dùng .env

- config structure: