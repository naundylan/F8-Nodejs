<div class="mt-4">
    <h1>THÊM SẢN PHẨM</h1>

    <form method="POST" action="/product/store">
        <div class="mb-3">
            <label for="title" class="form-label">Nhập Title</label>
            <input type="text" class="form-control" id="title" name="title">
        </div>
        <div class="mb-3">
            <label for="discription" class="form-label">Nhập Discription</label>
            <input type="text" class="form-control" id="discription" name="discription">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Nhập Price</label>
            <input type="text" class="form-control" id="price" name="price">
        </div>
        <div class="mb-3">
            <label for="slug" class="form-label">Nhập Slug</label>
            <input type="text" class="form-control" id="slug" name="slug">
        </div>
        <div class="mb-3">
            <label for="img" class="form-label">Nhập link ảnh</label>
            <input type="text" class="form-control" id="img" name="img">
        </div>

        
        <button type="submit" class="btn btn-primary">Thêm sản phẩm</button>
    </form>
</div>