import { env } from './config.js'
import { getToken } from './src/api/sdk/wialon/token.js'
import { showModal, removeClass } from './src/utils/utils.js'
import { sendCommand } from './src/api/Meerkat/meerkat.api.js'
import { login, getAvl, logout } from './src/api/sdk/wialon/wialonAPI.js'
import { getInfoGroup, getUnitsGroup } from './src/api/sdk/wialon/groups.js'
import { create_map_module_modal } from './src/components/ModuleMap/Map/Map.js';
import { getFields, setProperties } from './src/api/sdk/wialon/personalizados.js'
import { getUnitsStatus, create_status_module } from './src/api/sdk/wialon/statusUnit.js'
import { getNotifications, handleNotifications } from './src/api/sdk/wialon/notifications.js';
import { getTemperature, create_modal_temperature } from './src/api/sdk/wialon/temperature.js'
import { getGPS, getInfo, getPersonalizados, getSensores, getState } from './src/api/sdk/wialon/device.js'
import { getStateConectionsUnits, getStateConectionsUnitsbyStatus, getStateConectionsUnitsbyGroups } from './src/api/sdk/wialon/statusConections.js'
import { createHTML_PanelbyStatus, create_button_module, create_table_module, /*create_map_module_modal,*/  create_select_units, removeClass_v2 } from './src/helper/index.js'

window.showModal = showModal;
window.getFields = getFields;
window.searchUnit = searchUnit;
window.showStatus = showStatus;
window.sendCommand = sendCommand;
window.getInfoUnits = getInfoUnits;
window.setProperties = setProperties;
window.removeClass_v2 = removeClass_v2;
window.getSelectedUnitInfo = getSelectedUnitInfo;
window.handleNotifications = handleNotifications;
window.getOptionSelectUnitSearch = getOptionSelectUnitSearch;

let units;
let _units;
let _groups;
let _unitsbyStatus;
let _unitsfailedTemperature;

export let _token;
export let _conexion;

$(document).ready(() => {
    getToken().then(token => {
        _token = token;
        _login(token);
    });

    setInterval(function () {
        logout(_token);
        console.log('Actializando informacion...')
    }, 1 * 60 * 1000);
});

export const _login = async (token) => {
    try {
        const conexion = await login(token)
        _conexion = conexion;

        $("#user_Wialon").text(conexion.getCurrUser().getName());
        // showModal( "#welcomeinit")

        units = getAvl('avl_unit', conexion);

        const group = getAvl('avl_unit_group', conexion);
        const resource = getAvl('avl_resource', conexion);

        //create_status_module( conexion );
        getNotifications(resource);

        _units = getStateConectionsUnits(await getUnits(units));

        /* Menu de botones agrupados por estados de la unidad */
        if (env.Estados_de_unidades && env.statusInteres) {
            let _groups_aux = {};
            let info_groups = {};
            if (Object.keys(env.seccion_grupos_2).length) {
                env.statusInteres = { ...env.statusInteres, ...env.seccion_grupos_2 };

                let response_group = await getGrupos(group)

                info_groups = response_group;

                /* Se usa la misma variable para ahorra la declaracion variables */
                _groups_aux = getStateConectionsUnitsbyGroups(response_group);
                _groups_aux = createHTML_PanelbyStatus(_groups_aux);

            }

            let response_units = await getUnitsStatus(units)

            /* Se usa la misma variable para ahorra la declaracion variables */
            _unitsbyStatus = getStateConectionsUnitsbyStatus(response_units);
            _unitsbyStatus = createHTML_PanelbyStatus(_unitsbyStatus);
            _unitsbyStatus = { ..._unitsbyStatus, ..._groups_aux }

            create_button_module(info_groups, _unitsbyStatus, '#button_module2', env.statusInteres);
        }

        /* Menu de botones agrupados por grupos de la cuenta */
        if (env.Grupos) {

            if (Object.keys(env.seccion_grupos_1).length > 0) {
                if (Object.keys(env.seccion_grupos_2).length == 0 && (!env.Estados_de_unidades)) {
                    $(".btn-module").addClass('w-100');
                }

                let response_group = await getGrupos(group)
                _groups = getStateConectionsUnitsbyGroups(response_group);
                _groups = createHTML_PanelbyStatus(_groups);
                create_button_module(response_group, _groups, '#button_module1', env.seccion_grupos_1);
            }

            if (Object.keys(env.seccion_grupos_2).length > 0 && (!env.Estados_de_unidades)) {

                let response_group = await getGrupos(group)
                _groups = getStateConectionsUnitsbyGroups(response_group);
                _groups = createHTML_PanelbyStatus(_groups);
                create_button_module(response_group, _groups, '#button_module2', env.seccion_grupos_2);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

export const getUnitById = (id) => {
    for (const key in _units) {
        const unit = _units[key];
        for (const key in unit) {
            const value = unit[key];
            if (id == value.info.idUnit) {
                return value;
            }
        }
    }
}

const getGrupos = async (groups) => {
    let _groups = {}
    await groups.forEach(group => {
        const objeto = {
            info: getInfoGroup(group),
            units: getUnitsGroup(group),
        }
        _groups[group.getName()] = objeto;
    });
    return _groups;
}

const getUnits = async (units) => {
    await units.forEach(unit => {
        const objeto = {
            info: getInfo(unit),
            gps: getGPS(unit),
            sensors: getSensores(unit),
            personalizados: getPersonalizados(unit)
        }
        getState(objeto);
        units[unit.getName()] = objeto
    });
    return units;
}

function getInfoUnits(modulo, estado, id_tag) {
    const TODO = { ..._unitsbyStatus, ..._groups };
    for (const _modulo in TODO) {
        if (_modulo == modulo) {
            const _units = TODO[_modulo];
            if (estado == 'general') {
                const { apagadas, movimiento, ralenti, sinconexion, warning } = _units
                const allUnits = { ...apagadas, ...movimiento, ...ralenti, ...sinconexion, ...warning };
                create_table_module(allUnits, '#table-tbody');
            } else {
                for (const key in _units) {
                    const units = _units[key];

                    if (key == estado) {
                        create_table_module(units, '#table-tbody');
                    }
                }
            }

        }
    }
}

function searchUnit() {
    const TODO = { ..._units.online, ..._units.offline };
    create_select_units(TODO);
    showModal('#modal-search_units');
}

function getSelectedUnitInfo(id) {
    const value = getUnitById(id);
    create_map_module_modal(value);
}

function showStatus() {
    create_status_module(_conexion);
}

function getOptionSelectUnitSearch() {
    const idUnit = $("#select_unit_search").val();
    const unitbyId = getUnitById(idUnit);
    // alert( value );
    create_map_module_modal(unitbyId);
}