import { getUnitById } from "../js/index.js";
import { showToast, axiosPost } from "../utils/utils.js";

export function getNotifications( resource ) {
    for (var i = 0; i < resource.length; i++) { 
        resource[i].addListener("messageRegistered", showData); 
    }
}

function showData(event) {
    const data = event.getData(); // get data from event
    const cont = parseInt($("#cont_notificacion").text());    

    if (data.tp && data.tp == "unm") {
        var unit = getUnitById( data.unit );

        $("#notifi").prepend(`
            <div class="alert alert-dark bg-white border border-2 border-dark-subtle shadow rounded-3 p-4 position-relative fade show" id="${cont}" role="alert">

                <!-- Encabezado -->
                <div class="d-flex align-items-center mb-3 flex-wrap gap-3">
                    <span class="badge rounded-pill bg-light text-dark fs-6">${cont + 1}</span>
                    <img src="${unit.info.icon}" class="rounded" alt="icono unidad" style="width: 40px; height: 40px; object-fit: cover;">
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
            </div>
        `);

        $("#cont_notificacion").text(cont + 1);

        $("#Toast_Notification").html(`
            <div class="toast-header">
                <img src="${unit.info.icon}" class="rounded me-2" width="45" alt="...">
                <strong class="me-auto fs-4">${unit.info.nameUnit}</strong>
                <small>Ahora mismo</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body fs-5">
                ${data.name}.
            </div>
        `);

        showToast("#Toast_Notification");
        
        //Sonido de notificacion
        var audio = new Audio('./mp3/livechat-129007.mp3');
        audio.play();

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