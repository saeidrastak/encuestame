define( [
         "dojo/_base/declare",
         "dijit/_WidgetBase",
         "dijit/_TemplatedMixin",
         "dijit/_WidgetsInTemplateMixin",
         "me/core/main_widgets/EnmeMainLayoutWidget",
         "me/core/enme",
         "dijit/registry",
         "dojo/text!me/web/widget/tweetpoll/detail/templates/tweetPollInfoDetail.html" ],
        function(
                declare,
                _WidgetBase,
                _TemplatedMixin,
                _WidgetsInTemplateMixin,
                main_widget,
                _ENME,
                registry,
                 template ) {
            return declare( [ _WidgetBase, _TemplatedMixin, main_widget, _WidgetsInTemplateMixin ], {

          // Template string.
            templateString: template,

          /*
          * Widget
          */
         widgetsInTemplate: true,
         /*
          * Date
          */
         date: "",
         /*
          * Owner
          */
         owner: "",

         /*
          * Question name.
          */
         question: "",

         /*
          * Tweetpoll id
          */
         tweetPollid: null,
         /*
          *
          */
         completed: false,

         /*
          *
          */
         votes: 0,

         /*
          *
          */
         hits: 0,

         /*
          *
          */
         countdownWidget: null,

         /*
          *
          */
         statusWidget: null,

         /*
          *
          */
         postCreate: function() {

             //Console.debug("this.date", this.date);
             this.statusWidget = registry.byId("status_" + this.id );
             if ( this._hits ) {
                 this._hits.innerHTML = _ENME.shortAmmount( this.hits );
             }
             if ( this._votes ) {
                 this._votes.innerHTML = _ENME.shortAmmount( this.votes );
             }
             if ( this._question_title ) {
                 this._question_title.innerHTML = this.question;
             }
             if ( !this.completed ) {
                 if ( this.date !== null ) {
                     this.date = new Date( this.date );

                     //Console.debug("this.date 2 ", this.date);
//                     this.countdownWidget = new encuestame.org.core.shared.utils.CountDown({
//                         limitDate : {
//                             day : this.date.getDate(),
//                             month : this.date.getMonth(),
//                             year : this.date.getFullYear(),
//                             hour : this.date.getHours(),
//                             minutes : this.date.getMinutes(),
//                             seconds : this.date.getSeconds()
//                         }
//                     });
                     //countdown widget initialize.
//                     var countdown = dojo.byId("countdown_"+this.id);
//                     if (countdown){
//                         countdown.appendChild(this.countdownWidget.domNode);
//                         this.countdownWidget.countdown();
//                         this.countdownWidget.timeOffAction = dojo.hitch(this, function() {
//                             this.completed = true;
//                             this._completeTweetPoll();
//                         });
//                     }
                 }
             } else {
                 this._completeTweetPoll();
             }
         },

         /*
          *
          */
         _completeTweetPoll: function() {

//             If(this.countdownWidget){
//                 this.countdownWidget.hide();
//             }
             if ( this.statusWidget ) {
                 this.statusWidget.setClose();
             }
         },

         _reloadHits: function() {

             //TODO: reload hits.
         }

    });
});
