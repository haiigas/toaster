function extend(obj, ext) {
    Object.keys(ext).forEach(function (key) {
        obj[key] = ext[key];
    });
    return obj;
}

function toaster(msg, ttype, opt) {
    const defaultType = 'info';
    const icons = {
        info: 'fa fa-info-circle',
        success: 'fa fa-check-circle',
        error: 'fa fa-times-circle',
        warning: 'fa fa-exclamation-circle'
    };

    ttype = ttype || defaultType;
    const ticon = icons[ttype] || '';

    const def = {
        position: 'bottom-right',
        ui: '',
        icon: 'auto',
        clear: false
    };

    const attr = opt ? extend(def, opt) : def;

    // Set position and icon
    attr.position = attr.position ? 'toast-' + attr.position : 'toast-bottom-right';
    attr.icon = attr.icon === 'auto' ? ticon : (attr.icon || '');
    attr.ui = attr.ui ? ' ' + attr.ui : '';

    const msi = attr.icon ? `<span class="toastr-icon"><em class="icon ${attr.icon}"></em></span>` : '';
    msg = msg ? msi + `<div class="toastr-text">${msg}</div>` : '';

    if (msg !== "") {
        if (attr.clear === true) {
            toastr.clear();
        }

        const options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": `${attr.position}${attr.ui}`,
            "closeHtml": '<span class="btn-trigger">Close</span>',
            "preventDuplicates": true,
            "showDuration": "1500",
            "hideDuration": "1500",
            "timeOut": "2000",
            "toastClass": "toastr",
            "extendedTimeOut": "3000"
        };

        toastr.options = extend(options, attr);
        toastr[ttype](msg);
    }
}
