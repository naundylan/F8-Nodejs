<h1>CHÀO MỪNG ĐẾN TRANG PRODUCT</h1>

<div class="mt-4">
    <div class="row">
        {{#each prod}}
        <div class="card" style="width: 18rem;">
            <a href="/product/{{this.slug}}">
                <img src="{{this.img}}" class="card-img-top" alt="..." style="height: 10rem;">
            </a>
            <div class="card-body">
                <a href="/product/{{this.slug}}">
                    <h5 class="card-title">{{this.title}}</h5>
                </a>
                <p class="card-text">{{this.description}}</p>
                <p>{{this.price}}</p>
            </div>
        </div>
        {{/each}}
    </div>
</div>

<div class="row">
    <a href="/product/create">Thêm mới</a>
</div>