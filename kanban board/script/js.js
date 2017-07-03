/**
 * Created by nguyenmanhdo on 6/5/17.
 */
function getIndex(){
  var numberWork = $('.count');
  var todoLength =  $('#todo a');
  var doingLength = $('#doing a');
  var doneLength = $('#done a');
  numberWork[0].innerHTML = $('#todo .collection-item').length;
  numberWork[1].innerHTML = $('#doing .collection-item').length;
  numberWork[2].innerHTML = $('#done .collection-item').length;
  
}
var COLUMN_TYPE = ['todo', 'doing', 'done'];
var DB = {
  getData: function () {//lay du lieu
    if (typeof(Storage) !== 'undefined') {
      var data
      try {
        data = JSON.parse(localStorage.getItem('list')) || {};
      } catch (error) {
        data = {};

      }
      return data;
    } else {
      alert('Sorry! No Web Storage support..');
      return {};
    }
  },

  setData: function (data) { // truyen du lieu
    localStorage.setItem('list', JSON.stringify(data))
  }
};
var list = DB.getData();

var app = {
  newJob: function (e, type, input) {
    var jobName = $(input).val()
    var event = window.event || e;

    if (event.keyCode === 13 && jobName.trim() !== '') {
      if (!list[type]) {
        list[type] = [];
      }
      list[type].push(jobName);

      DB.setData(list);

      //update DOM
      this.addJobToList(type, jobName);
      //reset input
      $(input).val('');
getIndex()
    }
  },
  addJobToList: function (type, jobName) {
    var item = '<a href="#!" class="collection-item">' + jobName +
      '<span class="badge" onclick="app.deleteJob(this)"><i class="Small material-icons">delete</i></span></a>'
    $('#' + type).append(item)
  },
  deleteJob: function (span) {
    var modal = $('#modal-confirm').modal();
    var btn = $('#btn-delete');
    var item = $(span).parent();
    modal.modal('open');
    btn.off('click');
    btn.on('click', function () {
      var columnType = item.parent().attr('id');
      var itemPosition = $('#' + columnType + ' .collection-item').index(item);
      list[columnType].splice(itemPosition,1);
      DB.setData(list);
      item.remove();
      getIndex()
      modal.modal('close');
    });
  }
};

$(function () {
  COLUMN_TYPE.forEach(function(type){
    var columnType = list[type] || [];
    columnType.forEach(function (jobName) {
      app.addJobToList(type, jobName);
getIndex()
    })
  })

  $('.sort-list').sortable({
    connectWith: '.sort-list',
    placeholder: 'ul-state-highlight',
    start: function (event, ui) {
      $(ui.item[0]).addClass('dragging');
      
      ui.item.oldColumnType = ui.item[0].parentElement.getAttribute('id');

      ui.item.oldItemPosition = ui.item.index();
      getIndex()
    },
    stop: function (event, ui) {
      $(ui.item[0]).removeClass('dragging');
      var item = ui.item;
      var oldColumnType = item.oldColumnType;
      var oldItemPosition = item.oldItemPosition;
      var newColumnType = item[0].parentElement.getAttribute('id');
      var newItemPosition = item.index();
      //Remove item from old position
      list[oldColumnType].splice(oldItemPosition,1);
      //Add item to new position
      list[newColumnType].splice(newItemPosition, 0, item[0].innerText);

      //Store data to localStorage
      DB.setData(list);
      getIndex()
    }
  })
})
