<div class="mt-4">
    <h1>CHỈNH SỬA SẢN PHẨM</h1>

    <form method="POST" action="/product/{{prod._id}}?_method=PUT">
        <div class="mb-3">
            <label for="title" class="form-label">Nhập Title</label>
            <input type="text" class="form-control" id="title" name="title" value="{{prod.title}}">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Nhập description</label>
            <input type="text" class="form-control" id="description" name="description" value="{{prod.description}}">
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">Nhập Price</label>
            <input type="text" class="form-control" id="price" name="price" value="{{prod.price}}">    
        </div>
        <div class="mb-3">
            <label for="img" class="form-label">Nhập link ảnh</label>
            <input type="text" class="form-control" id="img" name="img" value="{{prod.img}}">
        </div>

        
        <button type="submit" class="btn btn-primary">Sửa</button>
    </form>
</div>