/**
 * Created by nguyenmanhdo on 6/5/17.
 */

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
      modal.modal('close');
    });
  }
};

$(function () {
  COLUMN_TYPE.forEach(function(type){
    var columnType = list[type] || [];
    columnType.forEach(function (jobName) {
      app.addJobToList(type, jobName);

    })
  })

  $('.sort-list').sortable({
    connectWith: '.sort-list',
    placeholder: 'ul-state-highlight',
    start: function (event, ui) {
      $(ui.item[0]).addClass('dragging')
    },
    stop: function (event, ui) {
      $(ui.item[0]).removeClass('dragging')
    }
  })
})
