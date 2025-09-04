export default DOM =
{
    checklist_DOM: document.querySelector("#checklist"),
    checklist_items: checklist_DOM.querySelector("#checklist-items"),

    checklist_new_item: checklist_items.querySelector(".task"),
    new_item_input: checklist_new_item.querySelector("input"),
    task_placeholder_txt: new_item_input.value,

    bio_DOM: document.querySelector("#bio"),

    journal_DOM: document.querySelector("#journal"),
    journal_entries: document.querySelectorAll(".journal-min-entry"),
    journal_modal: document.querySelector("#journal-modal"),
    journal_modal_box: journal_modal.querySelector("#journal-modal-box"),
    journal_modal_entry_delete_btn: journal_modal_box.querySelector("#journal-modal-entry-delete"),
    journal_modal_title: journal_modal_box.querySelector("#journal-modal-title input"),
    journal_modal_body: journal_modal_box.querySelector("#journal-modal-body textarea"),


    last_entry_element: null
}
