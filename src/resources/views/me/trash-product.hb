<div class="row">
  <a href="/me/stored/products">Go Back</a>
  <h3>My deleted products</h3>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Confirm product deletion?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure about your deletion?, this action can't be restore! 
      </div>
      <div class="modal-footer">
        <button id="btn-delete-product" type="button" class="btn btn-danger">Delete</button>    
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>

<table class="table">
    <thead>
        <tr>
            <th scope="col">STT</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th class="colspan"></th>
        </tr>
    </thead>
    <tbody>
        {{#each products}}
        <tr>
            <th scope="row">{{sum @index 1}}</th>
            <td>{{this.title}}</td>
            <td>{{this.description}}</td>
            <td>{{this.price}}$</td>
            <td>
                <a class="btn btn-primary btn-restore" data-id="{{this._id}}">Restore</a>
                <button href="" class="btn btn-danger" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="{{this._id}}">Delete</button>
            </td>
        </tr>
        {{else}}
        <tr>
          <td colspan="5" class="text-center">
            No products here!
            <a href="/product/create">Add product</a>
          </td>
        </tr>
        {{/each}}
    </tbody>
</table>


{{!-- delete forms --}}
<form id="delete-product-form" method="POST"></form>
<form id="restore-product-form" method="POST"></form>


<script>


    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('btn-delete-product')
        var deleteButton
        var deleteForm = document.getElementById('delete-product-form')
        var restoreForm = document.getElementById('restore-product-form')
        var restoreBtn = $('.btn-restore')

        // When the first click
        $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget)
            deleteButton = button.data('id')
        })

        // When the second click
        btn.addEventListener('click', function () {
            deleteForm.action = '/product/' + deleteButton + '/force?_method=DELETE'
            deleteForm.submit()
        })

        // restore button
        restoreBtn.on('click', function(e) {
            e.preventDefault();
            var productId = $(this).data('id');
            restoreForm.action = '/product/' + productId + '/restore?_method=PATCH';
            restoreForm.submit();
        });
    })

</script>