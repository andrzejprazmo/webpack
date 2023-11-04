export class PopupDialog {
    init(){
        const dialog = document.createElement('div');
        dialog.innerHTML = '<strong>This is my dialog</strong>';
        document.body.appendChild(dialog);
    }
}