import { env } from "../../config.js";

export function createHTML_PanelbyStatus(data) {
    let objeto = {};
    for (const key in data) {
        const _state = data[key];
        const _units_online = _state;
        objeto[key] = getStateOnline(_units_online); // Crea un objeto con las unidades online por estatus
    }
    return objeto;
}

export function create_button_module(data_group = {}, data, id_tag, filter) {
    $(id_tag).empty();
    for (const titulo in data) {
        if (Object.keys(filter).includes(titulo)) {
            const _titulo = (filter[titulo].name);
            const _status_remove = (env.grupoInteres_modules[_titulo]) ? env.grupoInteres_modules[_titulo] : [];
            const _data = data[titulo];
            const contApagadas = Object.keys(_data.apagadas).length;
            const contRalenti = Object.keys(_data.ralenti).length;
            const contMovimiento = Object.keys(_data.movimiento).length;
            const contSinConexion = Object.keys(_data.sinconexion).length;
            const contWarning = Object.keys(_data.warning).length;
            const contGeneral = contApagadas + contRalenti + contMovimiento + contSinConexion + contWarning;
            const groupIdSafe = titulo.replace(/[\s\/]/g, "_");
            const titleIdSafe = _titulo.replaceAll(" ", "_");

            $(id_tag).append(`<!-- Grupo -->
                <div class="toast fade show w-100 shadow-sm border-0 overflow-hidden mb-1 module-card module-card--compact" role="alert" aria-live="assertive" aria-atomic="true" id="${titleIdSafe}">
                    <div class="toast-header bg-white module-card__header">
                        <div class="d-flex align-items-center min-w-0 flex-grow-1 gap-2">
                            ${(env.img[_titulo])
                                ? `<img src="${env.img[_titulo]}" alt="icon" class="img-fluid module-card__icon" width="34" id="img-${titleIdSafe}">`
                                : (data_group[titulo])
                                    ? `<img src="${data_group[titulo].info.icon}" alt="icon" class="img-fluid module-card__icon" width="34" id="img-${titleIdSafe}">`
                                    : `<img src="./src/assets/img/logojd.png" alt="icon" class="img-fluid module-card__icon" width="34" id="img-${titleIdSafe}">`
                            }
                            <button class="btn btn-link text-start text-decoration-none p-0 module-card__title-wrap" onclick="getInfoUnits('${titulo}', 'general')">
                                <strong class="module-card__title">${_titulo}</strong>
                            </button>
                        </div>
                        <button type="button" class="btn btn-dark btn-sm rounded-pill module-chip module-chip--total" onclick="getInfoUnits('${titulo}', 'general')">
                            Total <span class="badge text-bg-light cont ms-1" id="${titulo}">${contGeneral}</span>
                        </button>
                    </div>

                    <div class="toast-body bg-white module-card__body">
                        <div class="d-flex flex-wrap align-items-center gap-1 module-card__actions">
                            <button type="button"
                                class="btn btn-success btn-sm rounded-pill module-chip ${_status_remove.includes('movimiento') ? 'd-none' : ''}"
                                onclick="getInfoUnits('${titulo}', 'movimiento');"
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Movimiento">
                                <i class="bi bi-arrow-right me-1"></i>
                                <span class="d-none d-xxl-inline">Movimiento</span>
                                <span class="d-xxl-none">Mov.</span>
                                <span class="badge text-bg-dark cont ms-1" id="cont-${titulo}-movimiento">${contMovimiento}</span>
                            </button>

                            <button type="button"
                                class="btn btn-warning btn-sm rounded-pill module-chip ${_status_remove.includes('ralenti') ? 'd-none' : ''}"
                                onclick="getInfoUnits('${titulo}', 'ralenti');">
                                <i class="bi bi-bootstrap-reboot me-1"></i>
                                Ralenti
                                <span class="badge text-bg-dark cont ms-1" id="cont-${titulo}-ralenti">${contRalenti}</span>
                            </button>

                            <button type="button"
                                class="btn btn-primary btn-sm rounded-pill module-chip ${_status_remove.includes('apagadas') ? 'd-none' : ''}"
                                onclick="getInfoUnits('${titulo}', 'apagadas')">
                                <i class="bi bi-power me-1"></i>
                                Apagadas
                                <span class="badge text-bg-dark cont ms-1" id="cont-${titulo}-apagadas">${contApagadas}</span>
                            </button>

                            <button type="button"
                                class="btn btn-sm rounded-pill module-chip ${contSinConexion > 0 ? 'alert-btn btn-danger' : 'btn-secondary'} ${_status_remove.includes('sin_conexion') ? 'd-none' : ''}"
                                id="btn-${groupIdSafe}-sinconexion"
                                onclick="getInfoUnits('${titulo}', 'sinconexion', '#btn-${groupIdSafe}-sinconexion'); removeClass_v2('#btn-${groupIdSafe}-sinconexion', 'alert-btn btn-danger');"
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Sin conexiÃ³n">
                                <i class="bi bi-wifi-off me-1"></i>
                                <span class="d-none d-xxl-inline">Sin conexion</span>
                                <span class="d-xxl-none">Sin conex.</span>
                                <span class="badge text-bg-dark cont ms-1" id="cont-${titulo}-sinconexion">${contSinConexion}</span>
                            </button>

                            
                            ${(() => {
                                /*  OJO ESTA PARTE ES PARA CUANDO QUIRAN VER LAS UNIDADES QUE TIENEN MAS DE 30 DIAS SIN REPORTAR, ESTO AGREGARA UN QUINTO BOTON. ESTO SOLO SE 
                                    AGREGA A GRUPOS QUE SE PIDEN, SI SE REQUIERE HACER ALGUNA VALIDACION O ALGO POR EL ESTILO SE DEBE DE DESCOMENTAR EL VALOR TRUE PARA QUE AGREGUE EL
                                    BOTON A TODOS LOS GRUPOS.  
                                */ return '' })()}

                            ${(_titulo == 'DOBLES' || _titulo == 'HRH CAJAS' || _titulo == 'DIFEYRO DOBLES' /*|| true*/)
                                ? `<button type="button" class="btn btn-danger btn-sm rounded-pill module-chip" onclick="getInfoUnits('${titulo}', 'warning')">
                                        <i class="bi bi-exclamation-triangle me-1"></i>
                                        <span class="d-none d-xxl-inline">Sin reportar</span>
                                        <span class="d-xxl-none">S/rep.</span>
                                        <span class="badge text-bg-dark cont ms-1" id="cont-${titulo}-warning">${contWarning}</span>
                                    </button>`
                                : ''
                            }
                        </div>
                    </div>
                </div>
                <!-- ----- -->
            `);
        }
    }
}

export function create_table_module(data, id_table) {
    $(id_table).empty();
    for (const key in data) {
        const objeto = data[key];
        const velocidad = objeto.gps?.velocidad ?? 0;
        const voltaje = Math.round(objeto.sensors?.voltaje ?? 0);
        const bateria = Math.round(objeto.sensors?.bateria ?? 100);
        const ignicionEncendida = Boolean(objeto.sensors?.ignicion ?? 1);
        const equipo = objeto.personalizados?.equipo ?? "Sin equipo";
        const ultimaLectura = objeto.gps?.time ?? "Sin dato";

        const html = `
        <tr>
            <td class="p-1 border-0">
                <div class="toast fade show w-100 shadow-sm border-0 overflow-hidden mb-2 unit-card" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header bg-white unit-card__header">
                        <img class="rounded-2 me-2 unit-card__icon" src="${objeto.info.icon}" alt="Icon" width="34" height="34" />

                        <div class="min-w-0 flex-grow-1">
                            <button type="button" class="btn btn-link unit-card__name p-0 text-start text-decoration-none" onclick="getSelectedUnitInfo(${objeto.info.idUnit})">
                                ${objeto.info.nameUnit}
                            </button>
                            <div class="unit-card__time">Ult. MSJ: ${ultimaLectura}</div>
                        </div>

                        ${(objeto.personalizados?.IDMET)
                            ? `<div class="btn-group dropstart">
                                    <button type="button" class="btn btn-outline-danger btn-sm rounded-pill unit-card__cmd-btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Comandos
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" onclick="sendCommand('${objeto.personalizados?.IDMET?.v}', '1')">Reset</a></li>
                                        <li><a class="dropdown-item" onclick="sendCommand('${objeto.personalizados?.IDMET?.v}', '2')">Paro de motor</a></li>
                                        <li><a class="dropdown-item" onclick="sendCommand('${objeto.personalizados?.IDMET?.v}', '3')">Quitar paro de motor</a></li>
                                    </ul>
                                </div>`
                            : ``
                        }
                    </div>

                    <div class="toast-body bg-white unit-card__body">
                        <div class="d-flex flex-wrap align-items-center unit-card__chips">
                            <span class="badge rounded-pill text-bg-light unit-chip">
                                <i class="bi bi-person-circle me-1 text-primary"></i>JD
                            </span>
                            <span class="badge rounded-pill text-bg-light unit-chip">
                                <i class="bi bi-speedometer me-1 text-secondary"></i>${velocidad} km/h
                            </span>
                            <span class="badge rounded-pill text-bg-light unit-chip">
                                <i class="bi bi-tools me-1 text-dark"></i>${equipo}
                            </span>
                            <span class="badge rounded-pill text-bg-light unit-chip">
                                <i class="bi bi-lightning-charge me-1 text-danger"></i>${voltaje} V
                            </span>
                            <span class="badge rounded-pill text-bg-light unit-chip">
                                <i class="bi bi-battery-charging me-1 text-success"></i>${bateria} %
                            </span>
                            <span class="badge rounded-pill ${ignicionEncendida ? "text-bg-success" : "text-bg-secondary"} unit-chip">
                                <i class="bi bi-ev-front me-1"></i>${ignicionEncendida ? "Encendido" : "Apagado"}
                            </span>
                        </div>
                    </div>
                </div>
            </td>
        </tr>`;

        $(id_table).append(html);
    }
}

export function create_select_units(data) {
    for (const unit in data) {
        const _data = data[unit];
        $("#select_unit_search").append(
            `<option value="${_data.info.idUnit}"><img src="${_data.info.icon}" alt="" width="20">${_data.info.nameUnit}</option>`
        );
    }
    $("#select_unit_search").select2({
        dropdownParent: $("#modal-search_units"),
        width: "100%",
    });
}

function getStateOnline(data) {
    let objeto;
    const apagadas = {},
        movimiento = {},
        ralenti = {},
        warning = {},
        sinconexion = {};

    for (const _state in data) {
        const state = data[_state];
        for (const key in state) {
            const _unit = state[key];

            if (Object.keys(_unit).length > 0) {
                const conection = _unit.gps.State;

                const value = _unit.sensors.State;

                if (conection === "Online") {
                    switch (value) {
                        case "apagadas":
                            apagadas[key] = _unit;
                            break;
                        case "movimiento":
                            movimiento[key] = _unit;
                            break;
                        case "ralenti":
                            ralenti[key] = _unit;
                            break;
                    }
                } else if (conection === "Offline") {
                    sinconexion[key] = _unit;
                } else if (conection === "Warning") {
                    warning[key] = _unit;
                }
            }
        }
    }

    return (objeto = { apagadas, movimiento, ralenti, sinconexion, warning });
}

export function removeClass_v2(tag, className) {
    $(tag).removeClass(className);
}

