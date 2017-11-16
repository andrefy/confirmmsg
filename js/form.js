/**
 * Handles form submission events
 *
 * Use https://github.com/defunkt/facebox to create a confirmation modal
 */
(function($, Drupal) {
  'use strict';

   Drupal.behaviors.handleFormSubmission = {
    attach: function() {
      // Handle form submit click button
      $('.node-page-form .form-submit, .node-page-edit-form .form-submit')
        .click(handleFormSubmission);
    }
   };

  /**
   * Create a confirmation modal and handles confirm, cancel events
   *
   * @param  {Event} event   Click event
   */
  function handleFormSubmission(event) {
    // prevent custom submit event
    event.preventDefault();

    // set up modal
    $.facebox({ div: '#node-confirm-modal' })

    // handle confirmation event
    $('.btn-confirm').on('click', function() {
      $('.node-page-form, .node-page-edit-form').submit();
    });

    // handle cancel event
    $('.btn-cancel').on('click', function() {
      jQuery(document).trigger('close.facebox')
    });
  }

})(jQuery, Drupal);
