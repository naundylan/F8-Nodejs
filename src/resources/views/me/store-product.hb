<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Confirm product deletion?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        If you want to delete this product, please choose "Delete"!
      </div>
      <div class="modal-footer">
        <button id="btn-delete-product" type="button" class="btn btn-danger">Delete</button>    
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>


<form class="mt-4" name="container-form" method="POST" action="/product/handle-form-actions">
  <span class="">
    <h3>My products</h3>
    <a href="/me/trash/products">
      Thùng rác
      {{#if deletedCount}}
        <span>{{deletedCount}}</span>
      {{/if}}
    </a>


    <div class="mt-4 d-flex align-items-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkBoxAll">
        <label class="form-check-label" for="checkBoxAll">
          Select all
        </label>
      </div>

      <select class="form-select form-select-sm select-all-options select" aria-label="Default select example" name="action">
        <option selected>Select Options</option>
        <option value="delete">Delete</option>
        <option value="edit">Edit</option>
        <option value="view">View</option>
      </select>


      <button class="btn btn-primary btn-sm execBtn disabled" type="submit">Execute</button>
    </div>
  </span>


  <table class="table">
      <thead>
          <tr>
              <th class="colspan"></th>
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
              <td class="colspan">
                <div class="form-check">
                  <input class="form-check-input" name="productIds[]" type="checkbox" value="{{this._id}}">
                </div>
              </td>
              <th scope="row">{{sum @index 1}}</th>
              <td>{{this.title}}</td>
              <td>{{this.description}}</td>
              <td>{{this.price}}$</td>
              <td>
                  <a href="/product/{{this._id}}/edit" class="btn btn-primary">Edit</a>
                  <button href="#" class="btn btn-danger" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="{{this._id}}">Delete</button>
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

</form>


{{!-- delete forms --}}
<form id="delete-product-form" method="POST"></form>

<script>


    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('btn-delete-product')
        var deleteButton
        var deleteForm = document.getElementById('delete-product-form')
        var checkBoxAll = $('#checkBoxAll')
        var productItemCheckBox = $('input[name="productIds[]"]')
        var execBtn = $('.execBtn')
        var actionForm = document.forms['container-form']
        

        // CheckBox All Changed
        checkBoxAll.change(function() {
          var isChecked = $(this).prop('checked')
          productItemCheckBox.prop('checked', isChecked)
          renderCheckedBtn()
        })


        // CheckBox Item Changed
        productItemCheckBox.change(function() {
          var isCheckedAll = productItemCheckBox.length === $('input[name="productIds[]"]:checked').length
          checkBoxAll.prop('checked', isCheckedAll)
          renderCheckedBtn()
        })


        // Re-render checked btn
        function renderCheckedBtn() {
          var checkedCount = $('input[name="productIds[]"]:checked').length
          if(checkedCount) {
            execBtn.removeClass('disabled')
          }
          else {
            execBtn.addClass('disabled')
          }
        }

        // Execute button clicked
        execBtn.click(function(e) {
          var selectedAction = $('.select-all-options').val();
          if (selectedAction === 'delete') {
              // Ngăn form gửi đi mặc định, sau đó tự gửi lại với phương thức đúng
              e.preventDefault();
              actionForm.action = '/product/handle-form-actions?_method=DELETE';
              actionForm.submit();
          } else {
              // Ngăn form gửi đi nếu hành động không phải là 'delete'
              e.preventDefault();
              alert('Vui lòng chọn tùy chọn "Delete" để thực thi.');
          }
        })

        // When the first click
        $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget)
            deleteButton = button.data('id')
        })

        // When the second click
        btn.addEventListener('click', function () {
            deleteForm.action = '/product/' + deleteButton + '?_method=DELETE'
            deleteForm.submit()
        })

        console.log(actionForm)
    })

</script>