<h1>Sản phẩm của tôi</h1>

<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th class="colspan"></th>
        </tr>
    </thead>
    <tbody>
        {{#each products}}
        <tr>
            <th scope="row">{{sum @index 1}}</th>
            <td>{{this.title}}</td>
            <td>{{this.description}}</td>
            <td>{{this.price}}</td>
            <td>
                <a href="/product/{{this._id}}/edit" class="btn btn-primary">Edit</a>
                <a href="#" class="btn btn-danger">Delete</a>
            </td>
        </tr>
        {{/each}}
    </tbody>
</table>