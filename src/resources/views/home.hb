<h1>CHÀO MỪNG ĐẾN HOMEPAGE</h1>

<div class="mt-4">
    <div class="row">
        {{#each prod}}
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{this.title}}</h5>
                <p class="card-text">{{this.description}}</p>
                <p>{{this.price}}</p>
            </div>
        </div>
        {{/each}}
    </div>
</div>