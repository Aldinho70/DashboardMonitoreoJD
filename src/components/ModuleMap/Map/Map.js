import { showModal } from "../../../utils/utils.js";
import MessagesService from "../../../api/sdk/wialon/utils/getMessages.js";
import Map from "../../../api/sdk/Leaflet/Map.js";

$(() => {
    $("#root-modals").append(`
        <!-- Modal del mapa -->
        <div class="modal fade" id="root-map-modal" tabindex="-1" aria-labelledby="root-map-modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" id="root_map_module">
                    <!-- Contenido dinámico generado por JS -->
                </div>
            </div>
        </div>
    <!-- Modal del mapa -->
    `);
})

export const create_map_module_modal = async (objeto) => {
    const unit_messages = await MessagesService.loadMessagesToday(objeto.info.idUnit);
    
    // Generar contenido elegante para el modal
    $("#root_map_module").html(`
      <div class="modal-header bg-dark text-white">
        <div class="d-flex align-items-center">
            <img src="${objeto.info.icon}" class="rounded-circle me-2" width="40" alt="">
            <h3 class="mb-0">${objeto.info.nameUnit}</h3>
        </div>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Mapa -->
            <div class="container">
                <div class="row">
                    <div class="col-6 rounded-5 overflow-hidden shadow-sm">
                        <div id="map" class="rounded-5 overflow-hidden shadow-sm">
                            ${IframeMap(objeto.gps.longitud, objeto.gps.latitud)}
                        </div>
                    </div>
                    <div class="col-6 rounded-5 overflow-hidden shadow-sm">
                        <div class="h-100" id="map_leaflet" ></div>
                    </div>
                </div>
            </div>
        <!-- Mapa -->
  
        <!-- Información en tabla -->
            ${TableInformation(objeto)}
        <!-- Información en tabla -->
        
        <!-- Panel de opciones de la unidad-->
            ${PanelOptions(objeto)}
        <!-- Panel de opciones de la unidad-->
        
      </div>
    `);
    
    // MapTrip(unit_messages);
    showModal('#root-map-modal')
    $('#root-map-modal').on('shown.bs.modal', async function () {
    const unit_messages = await MessagesService.loadMessagesToday(objeto.info.idUnit);
    const coordinates = unit_messages.messages
        .filter(msg => msg.pos?.y && msg.pos?.x)
        .map(msg => [msg.pos.y, msg.pos.x]);

    Map.renderRecorrido('map_leaflet', coordinates);
});

}

const IframeMap = (longitud, latitud) => {
    return `<iframe 
                class="rounded"
                width="100%" height="100%" frameborder="0" style="border:0"
                src="https://maps.google.com/maps?q=${longitud},${latitud}&t=k&output=embed" 
                allowfullscreen>
            </iframe>`
}

const TableInformation = (objeto) => {
    return `<div class="card shadow-sm">
                <div class="card-header bg-secondary text-white">
                    <div class="d-flex align-items-center">
                    <img src="${objeto.info.icon}" class="rounded-circle me-2" width="32" alt="">
                    <h6 class="mb-0">Detalles de la unidad</h6>
                    </div>
                </div>
                <div class="card-body p-3">
                    <table class="table table-hover table-bordered">
                    <tbody>
                        <tr>
                            <th>Origen:</th>
                            <td>${objeto.personalizados?.origen?.v ?? "Error de su campo personalizado"}</td>
                        </tr>
                        <tr>
                            <th>Destino:</th>
                            <td>${objeto.personalizados?.destino?.v ?? "Error de su campo personalizado"}</td>
                        </tr>
                        <tr>
                            <th>Estatus:</th>
                            <td>${objeto.personalizados?.status?.v ?? "Error de su campo personalizado"}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>`
}

const PanelOptions = (objeto) => {
    return `<div class="mt-4">
                <div class="btn-group dropup w-100">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Opciones
                    </button>
                    <ul class="dropdown-menu w-100">
                    <li><button class="dropdown-item" onclick="getFields(${objeto.personalizados.id})">Campos personalizados</button></li>
                    <li><button class="dropdown-item" onclick="getSensores(${objeto.personalizados.id})">Sensores</button></li>
                    <li><button class="dropdown-item" onclick="getRecorridoUnit(${objeto.personalizados.id})">Mapear recorrido</button></li>
                    <li><button class="dropdown-item" onclick="getMensajes(${objeto.personalizados.id})">Últimos mensajes</button></li>
                    </ul>
                </div>
            </div>`
}

const MapTrip = (unit_messages) => {
    // Map.initMap();
    const { messages } = unit_messages;
    const coordinates = [];
    if (messages.length > 0) {
        messages.map(element => {
            const {
                t: timestamp = 0,
                pos: posicion = {},
                p: parametros = {}
            } = element;

            const {
                x: longitud = 0,
                y: latitud = 0,
                s: speed = 0
            } = posicion || {};

            /* array de posiciones registradas */
            if (latitud && longitud) {
                coordinates.push([latitud, longitud]);
            }
        });
        // Map.dibujarRecorrido(coordinates);
    }
}

export function create_map_module_div(objeto) {
    $("#map").html(`
        <iframe
            width="100%" height="100%" frameborder="0" style="border:0"
            src="https://maps.google.com/maps?q=${objeto.gps.longitud},${objeto.gps.latitud}&output=embed" allowfullscreen>
        </iframe>
    `);

    $("#table-info").html(`
        <thead>
                <tr>
                    <th scope="col"> <img src="${objeto.info.icon}" width="24" alt=""> </th>
                    <th scope="col">${objeto.info.nameUnit}</th>
                    <th scope="col"></th>
                    <th scope="col">
                        <div class="btn-group dropup auto-ms" role="group">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Opciones
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <button type="button" class="dropdown-item " id="btn-campospers" onclick="getFields(${objeto.personalizados.id})">
                                        Campos personalizados
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="dropdown-item " id="btn-mapear" onclick="getSensores(${objeto.personalizados.id})">
                                        Sensores
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="dropdown-item " id="btn-mapear" onclick="getRecorridoUnit(${objeto.personalizados.id})">
                                        Mapear recorrido
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="dropdown-item " id="btn-mapear" onclick="getMensajes(${objeto.personalizados.id})">
                                        Ultimos mensajes
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Origen:</th>
                    <td colspan="4">${objeto.personalizados?.origen.v ?? 'Error  de su campo personalizado'}</td>
                </tr>
                <tr>
                    <th scope="row">Destino:</th>
                    <td colspan="4">${objeto.personalizados?.destino.v ?? 'Error de su campo personalizado'}</td>
                </tr>
                <tr>
                    <th scope="row">Estatus:</th>
                    <td colspan="4">${objeto.personalizados?.status.v ?? 'Error  de su campo personalizado'}</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
    `);
}