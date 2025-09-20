# Git: 
## Undo action
### Undo Commit message: 
git commit --amend -m”message”

### Undo File staging → working directory:
- **Restote 1 file:** git restore --staged <file_name>
- **Restore tất cả các file:** git restore --staged .

### Undo File repository → working directory (un-commit):
// N: số lượng commit muốn reset

git reset HEAD ~N 

## Branching 
- **Pull code từ server về:** git pull origin main

- Git sử dụng nhánh (branch) để tạo ra các “phiên bản” riêng của code, tránh ảnh hưởng tới “bản gốc”

- Khi khởi tạo repo (*git init*), nhánh mặc định sẽ được tạo ra

### Một số câu lệnh với nhánh:
1. **Cấu hình:** git config --global init.defaultBranch main

// khi khởi tạo, đặt nhánh mặc định là nhánh main

2. **Xem danh sách nhánh:** git branch

// Cần có ít nhất 1 commit mới hiện danh sách nhánh

3. **Tạo nhánh mới:** git branch <tên_branch>

// Nhánh mới “copy” giống hệt nhánh hiện tại

4. **Chuyển sang nhánh mới:** git checkout <tên_branch>

Xoá branch: git branch -D <tên nhánh>
5.  Vừa tạo, vừa chuyển sang nhánh mới: git checkout -b <tên>
# Javascript basic 
## Object
## Array
## Function