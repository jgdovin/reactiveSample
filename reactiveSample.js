if (Meteor.isClient) {

  Template.hello.onCreated(function(){
    this.currentActive = new ReactiveVar(0);
  })

  Template.hello.helpers({
    tasks: function () {
      return [
        {id: 1, title: 'get stuff done', completed: false},
        {id: 2, title: 'buy milk', completed: false},
        {id: 3, title: 'have fun', completed: false}
      ]
    },
    active: function() {
      return this.id === Template.instance().currentActive.get();
    }
  });

  Template.hello.events({
    'click span.edit': function (event, template) {
      template.currentActive.set(this.id);
    }
  });
}
