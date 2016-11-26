$(document).ready(function() {
    $('main.main').attr('id', 'incident-profile');

    $('.filter-clear, .show-filter-manager').addClass('button tiny secondary');

    $('#cms_post_create_tags_ul').tagit({
        // @ToDo: i18n
        placeholderText: 'Add tags here…',
        singleField: true,
        singleFieldNode: $('#cms_post_create_tags_input')//,
        // @ToDo: make options visible
        //autocomplete: {
        //    source: S3.Ap.concat('/cms/tag/search_ac.json')
        //}
    });
});