import { getUnitById } from "../../../../index.js";
import { showToast, axiosPost } from "../../../utils/utils.js";

$( () => {
    $(`#root-modals`).append(initModalNotifations);

    $(`#root-toast`).append(initToastNotifications);

    $(`#root-toast`).append(initToastSendComandResult);

    $(`#root-toast`).append(initToastNotificationsAtends);
}) 

export function getNotifications( resource ) {
    for (var i = 0; i < resource.length; i++) { 
        resource[i].addListener("messageRegistered", processNotification); 
    }
}

function processNotification(event) {
    const data = event.getData(); // get data from event
    const cont = parseInt($("#cont_notificacion").text());    
    
    if (data.tp && data.tp == "unm") {
        var unit = getUnitById( data.unit );

        $("#root-notification").prepend( addNotificationModal(unit, data, cont) );

        $("#root_table_notificacions").prepend( addNotificationView(unit, data, cont) );

        $("#cont_notificacion").text(cont + 1);

        $("#Toast_Notification").html(addNotificationToast(unit, data));

        showToast("#Toast_Notification");
        
        //Sonido de notificacion
        var audio = new Audio('./src/assets/audio/livechat-129007.mp3');
        audio.play();        
    }
}

const initModalNotifations = () => {
    return `<div class="modal " tabindex="-1" id="modal-notificaciones">
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title">Notificaciones <span class="cont-notifiaciones"></span></h5>
                            <button type="button" class="btn btn-close bg-danger " data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="root-notification"></div>
                    </div>
                </div>
            </div>`
}

const initToastNotifications = () => {
    return `<div class="toast-container position-fixed top-0 end-0 pt-3">
                <div class="mt-5"></div>
                <div id="Toast_Notification" class="toast fade w-100 bg-waring" role="alert" aria-live="assertive" aria-atomic="true"></div>
            </div>`;
}

const initToastSendComandResult = () => {
    return `<div class="toast-container  position-fixed top-50 start-50 translate-middle pt-3">
                <div id="Toast_ComandResult" class="toast fade w-100 text-bg-warning" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header d-flex flex-row gap-3">
                        <img src="./src/assets/img/logojd.png" alt="" width="35" height="35" class="d-inline-block align-text-top">
                        <strong class="me-auto fs-5">Envio de comandos</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body text-center">
                        <Strong class="fs-3" >Comando enviado correctamente</Strong>
                    </div>
                </div>
            </div>`;
}

const initToastNotificationsAtends = () => {
    return `<div class="toast-container bg-secondary top-0 start-0">
                <div id="NotificacionAtendida" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header d-flex flex-row gap-3">
                        <img src="./src/assets/img/logojd.png" alt="" width="35" height="35" class="d-inline-block align-text-top">
                        <strong class="me-auto fs-5">Notificacion atendida</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body text-center">
                        <Strong class="fs-6" id="name_unit_notifi_atendida"> </Strong>
                    </div>
                </div>
            </div>`;
}

const addNotificationModal = (unit, data, cont) => {
    return `<div class="alert alert-dark bg-white border border-2 border-dark-subtle shadow rounded-3 p-4 position-relative fade show" id="${cont}" role="alert">

                <!-- Encabezado -->
                <div class="d-flex align-items-center mb-3 flex-wrap gap-3">
                    <span class="badge rounded-pill bg-light text-dark fs-6">${cont + 1}</span>
                    <img src="${unit.info?.icon ?? ''}" class="rounded" alt="icono unidad" style="width: 40px; height: 40px; object-fit: cover;">
                    <h5 class="mb-0 fw-bold">${unit.info.nameUnit}</h5>

                    <h5 class="ms-auto text-muted fw-semibold">${data.name}</h5>
                    <button type="button" class="btn-close position-absolute top-0 end-0 m-3 btn-remove-alert-notificacion" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <!-- Contenido principal -->
                <hr>
                <p class="fs-5 text-dark mb-3">${data.txt}</p>
                <hr>

                <!-- Botones de acción -->
                <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-outline-danger btn-sm px-3 rounded-5" onclick="showMapNotifi(${data.x}, ${data.y});">
                    <i class="bi bi-geo-alt-fill me-1"></i> Ver ubicación
                    </button>

                    <button type="button" class="btn btn-danger btn-sm px-3 rounded-5" onclick="handleNotifications(${cont}, '${unit.info.nameUnit}', '${data.t}', 'user_root');">
                    <i class="bi bi-check-circle-fill me-1"></i> Atender
                    </button>
                </div>
            </div>`;
}

const addNotificationView = (unit, data, cont) => {
    return `
        <div class="card shadow-sm border rounded-3 p-2 notification-item" id="0">
            <div class="d-flex align-items-center gap-2">
                <span class="badge bg-light text-dark">${cont + 1}</span>
                <img src="${unit.info?.icon ?? ''}" class="rounded" width="18" height="18">
                <div class="flex-grow-1">
                    <div class="fw-semibold small">${unit.info.nameUnit}</div>
                    <div class="text-muted small">${data.name}</div>
                </div>
                <button class="btn-close btn-sm btn-remove-alert-notificacion" onclick="handleNotifications(${cont}, '${unit.info.nameUnit}', '${data.t}', 'user_root');"></button>
            </div>
        </div>`;
}

const addNotificationToast = (unit, data) => {
    return `<div class="toast-header">
                <img src="${unit.info.icon}" class="rounded me-2" width="45" alt="...">
                <strong class="me-auto fs-4">${unit.info.nameUnit}</strong>
                <small>Ahora mismo</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body fs-5">
                ${data.name}.
            </div>`;
}

const atendAlertBD = () => {
    // const objeto = {
        //     name_user: name_user,
        //     name_unidad: unit.getName(),
        //     name_alert: data.name,
        //     txt: data.txt,
        //     timestamp: data.t,
        //     latitud: data.y,
        //     longitud: data.x,
        //     monitorista: $("#getmonitorista").text()
        // };

        // axiosPost( './php/insert_Notificaciones.php', objeto )
}

export function handleNotifications(id, unidad, timestamp, name_user) {
    
    $("#name_unit_notifi_atendida").text(unidad);
    showToast('#NotificacionAtendida');
    $("#" + id).remove();
    $("#cont_notificacion").text(parseInt($("#cont_notificacion").text()) - 1);
    
    // const objeto = {
    //     name_unidad: unidad,
    //     timestamp: timestamp,
    //     atendida: true,
    //     new_timestamp: new Date().getTime(),
    //     name_user: name_user,
    //     monitorista: 'root_user'
    // };

    // axiosPost('./php/update_Notificaciones.php', objeto)

}