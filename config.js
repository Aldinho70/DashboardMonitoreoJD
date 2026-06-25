export const env = {
    token: "e1749cb44770905014c9e8957aff9e8919E599BEA293EE44A7F9867566DF0C4736C43DEA",

    /* Grupos de la cuenta que queremos ver */
    Grupos: true,
        seccion_grupos_1: { 
            '03 CARGAS A SEGUIR': {name: 'A seguir'},
            '05 TANQUES TICSA':{name: 'Tanques'},
            'GOMEZ PALACIO': {name: 'Gomez Palacio'},
            'ABASOLO': {name: 'Abasolo'},
            'MERIDA': {name: 'Merida'},            
            '07 TICSA': {name: 'Ticsa'},            
            '09 GENERAL TICSA/TRAFUSA': {name: 'General'},        
            '10 IMPERIAL SENSORES': {name: 'Impereal'},        
            'UNIDADES EN CLIENTE TCS/TFS': {name: 'Con cliente'},        

        },
        seccion_grupos_2: {
            'CD JUAREZ': { name: 'Juarez'},
            '08 TRAFUSA': { name: 'Trafusa'},
            'FILSA': { name: 'Filsa'},
            // '02 UNIDADES CARGADAS TFS/TCS': { name: 'Cargadas'},
            // '02 UNIDADES VACIAS TFS/TCS': { name: 'Vacias'},

        },

    /* Estados de las unidades */
    Estados_de_unidades: true,
    NAME_FIELD_STATUS_OPERATION: "1STATUSDASHBOARD",
        statusInteres: {
            'VACIO': {name: 'Vacios'},
            'CARGADO': {name: 'Cargados'},
            'ESPERA_CARGA': {name: 'Espera carga'},
            'ESPERA_DESCARGA': {name: 'Espera descarga'},
            // 'SIN_STATUS': {name: 'Sin estatus'},
        }, 

    Name_cajas: '',

    grupoInteres_modules: {
        'Juarez': ['Movimiento']
    },

    module_critical_units: true,

    img: { 
        /* 'VACIO': './src/assets/img/logojd.png', 
        ...*/
    },

    map_module: {
        map : true,
        detail: true,
    }
}

// Usuario: TICSA/TRAFUSA DESARROLLOS
// Contrasena: Ticfusa-2024